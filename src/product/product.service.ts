import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';
import { PrismaService } from 'src/config/db/prisma.service';
import { join } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { Prisma, Status } from '@prisma/client';
import { Role } from 'src/auth/enums/roles.enum';
import { CloudinaryService } from '../common/cloudinary/cloudinary.service';

@Injectable()
export class ProductService {
  private readonly product: PrismaService['product'];
  private readonly user: PrismaService['user_ce'];

  constructor(
    private readonly cloudinaryService: CloudinaryService,
    prismaService: PrismaService,
  ) {
    this.product = prismaService.product;
    this.user = prismaService.user_ce;
  }

  async create(createProductDto: CreateProductDto, user: Prisma.user_ceGetPayload<{ include: { user_role: true } }>, file?: Express.Multer.File | undefined) {
    // let fileName = null;
    // if (file) {
    //   const directoryPath = join(__dirname, '..', '..', 'static', 'products');
    //   if (!existsSync(directoryPath)) mkdirSync(directoryPath, { recursive: true }); // recursively create directory for creaet two the firs static and the second products

    //   const getUuid = crypto.randomUUID.bind(crypto);
    //   const fileExtension = file.mimetype.split('/')[1];
    //   fileName = `${getUuid()}.${fileExtension}`;
    //   // save file to disk
    //   const filePath = join(directoryPath, fileName);
    //   writeFileSync(filePath, file.buffer); // Save file manually after validation
    // }

    let assetUrl = null;
    if (file) {
      const result = await this.cloudinaryService.uploadAsset(file);
      assetUrl = result.url;
    }

    return this.product.create({
      data: {
        description: createProductDto.description,
        price: createProductDto.price,
        stock: createProductDto.stock,
        image: assetUrl,
        creation_user: user.name,
        modification_user: user.name,
        unitOfMeasure: { connect: { id: createProductDto.unitOfMeasure } },
        predefinedProduct: { connect: { id: createProductDto.predefinedProduct } },
        user_ce: { connect: { id: user.id } },
      }
    });
  }

  async findAll(paginationDto: PaginationDTO) {
    const { page = 1, size = 10 } = paginationDto;

    const products = await this.product.findMany({
      skip: (page - 1) * size,
      take: size,
      include: {
        predefinedProduct: {
          include: { category: true }
        },
        unitOfMeasure: true,
        user_ce: {
          select: { name: true, email: true },
        },
      },
      where: {
        AND: [
          {
            predefinedProduct: { category: { status: Status.Activo } },
          },
          {
            predefinedProduct: { status: Status.Activo },
            unitOfMeasure: { status: Status.Activo },
            user_ce: { status: Status.Activo },
          }
        ]
      },
      orderBy: { creation_date: 'desc' },
    });

    const totalProducts = await this.product.count();

    const totalPages = Math.ceil(totalProducts / size);
    const hasMore = page < totalPages;


    return {
      totalPages,
      hasMore,
      currentPage: page,
      products,
    };
  }

  async findAllBySellerId(paginationDto: PaginationDTO, sellerId: number) {
    const { page = 1, size = 12 } = paginationDto;

    const products = await this.product.findMany({
      skip: (page - 1) * size,
      take: size,
      include: {
        predefinedProduct: {
          include: { category: true }
        },
        unitOfMeasure: true,
        user_ce: {
          select: { name: true, email: true, allowBankTransfers: true, allowPaypalPayments: true, bankTransfersInfo: true },
        },
      },
      where: {
        seller_id: sellerId,
        AND: [
          {
            predefinedProduct: { category: { status: Status.Activo } },
          },
          {
            predefinedProduct: { status: Status.Activo },
            unitOfMeasure: { status: Status.Activo },
            user_ce: { status: Status.Activo },
          }
        ]
      },
      orderBy: { creation_date: 'desc' },
    });

    const totalProducts = await this.product.count({ where: { seller_id: sellerId, status: Status.Activo } });

    const totalPages = Math.ceil(totalProducts / size);
    const hasMore = page < totalPages;

    const sellerInfo = await this.user.findUnique({
      where: { id: sellerId },
      select: { name: true, email: true, profilePicture: true, id: true },
    });

    return {
      totalPages,
      hasMore,
      currentPage: page,
      products,
      sellerInfo: {
        ...sellerInfo,
      }
    };
  }

  // async findAllProductsByUser(userId: number) {
  //   const page = 1, size = 99999;

  //   const products = await this.product.findMany({
  //     skip: (page - 1) * size,
  //     take: size,
  //     include: {
  //       predefinedProduct: {
  //         include: { category: true }
  //       },
  //       unitOfMeasure: true,
  //       user_ce: {
  //         select: { name: true, email: true },
  //       },
  //     },
  //     where: {
  //       seller_id: userId,
  //       AND: [
  //         {
  //           predefinedProduct: { category: { status: Status.Activo } },
  //         },
  //         {
  //           predefinedProduct: { status: Status.Activo },
  //           unitOfMeasure: { status: Status.Activo },
  //           user_ce: { status: Status.Activo },
  //         }
  //       ]
  //     },
  //     orderBy: { creation_date: 'desc' },
  //   });

  //   const totalProducts = await this.product.count();

  //   const totalPages = Math.ceil(totalProducts / size);
  //   const hasMore = page < totalPages;

  //   return {
  //     totalPages,
  //     hasMore,
  //     currentPage: page,
  //     products,
  //   };
  // }

  findOne(id: number) {
    return this.getProduct(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto, user: Prisma.user_ceGetPayload<{ include: { user_role: true } }>, file?: Express.Multer.File | undefined) {
    const oldProduct = await this.getProduct(id);

    // validation if the user is the seller
    if (user.user_role.every(role => Number(role.roleId) !== Role.Admin)) {
      if (oldProduct.seller_id !== user.id) {
        throw new ForbiddenException('No tienes permisos para modificar este producto');
      }
    }

    let assetUrl = null;
    if (file) {
      // const directoryPath = 'static/products';
      // const directoryPath = join(__dirname, '..', '..', 'static', 'products');
      // if (!existsSync(directoryPath)) mkdirSync(directoryPath, { recursive: true }); // recursively create directory for creaet two the firs static and the second products

      // remove old image
      if (oldProduct.image) {
        const assetPublicId = (oldProduct.image.split('/').pop()).split('.').shift();
        await this.cloudinaryService.removeAsset(assetPublicId);
        // const oldFilePath = join(directoryPath, oldProduct.image);
        // if (existsSync(oldFilePath)) unlinkSync(oldFilePath);
      }

      // const getUuid = crypto.randomUUID.bind(crypto);
      // const fileExtension = file.mimetype.split('/')[1];
      // fileName = `${getUuid()}.${fileExtension}`;
      // save file to disk
      // const filePath = join(directoryPath, fileName);
      // writeFileSync(filePath, file.buffer); // Save file manually after validation

      const result = await this.cloudinaryService.uploadAsset(file);

      assetUrl = result.url;
    }

    return this.product.update({
      where: { id },
      include: { predefinedProduct: { include: { category: true } }, unitOfMeasure: true },
      data: {
        description: updateProductDto.description,
        price: updateProductDto.price,
        stock: updateProductDto.stock,
        image: file ? assetUrl : oldProduct.image,
        status: updateProductDto.status,
        creation_user: user.name,
        modification_user: user.name,
        unitOfMeasure: { connect: { id: updateProductDto.unitOfMeasure } },
        predefinedProduct: { connect: { id: updateProductDto.predefinedProduct } },
        user_ce: { connect: { id: user.id } },
      }
    });
  }

  async remove(id: number, user: Prisma.user_ceGetPayload<{ include: { user_role: true } }>) {
    const product = await this.getProduct(id);

    // validation if the user is the seller
    if (user.user_role.every(role => Number(role.roleId) !== Role.Admin)) {
      if (product.seller_id !== user.id) {
        throw new ForbiddenException('No tienes permisos para modificar este producto');
      }
    }

    return this.product.softDelete({ where: { id: product.id } });
  }

  private async getProduct(id: number) {
    const product = await this.product.findUnique({
      where: { id, status: Status.Activo },
      include: {
        predefinedProduct: {
          include: { category: true }
        },
        unitOfMeasure: true,
        user_ce: {
          select: { name: true, email: true }
        },
      }
    });

    if (!product) throw new NotFoundException(`Product with id ${id} not found`);

    return product;
  }
}

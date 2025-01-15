import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/config/db/prisma.service';
import { ConfigService } from '@nestjs/config';
import { Envs } from 'src/config/env.config';
import { compareSync, hash } from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './guards';
import { Status, UserType } from '@prisma/client';
import { Role } from './enums/roles.enum';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { RegisterUserDto } from './dto/register-auth.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdatePaymentMethodsDto } from './dto/update-payment-methods.dto';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';

@Injectable()
export class AuthService {
  private readonly user: PrismaService['user_ce'];

  constructor(
    private readonly configService: ConfigService<Envs>,
    private readonly jwtService: JwtService,
    private readonly cloudinaryService: CloudinaryService,
    prisma: PrismaService,
  ) {
    this.user = prisma.user_ce;
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.user.findUnique({ where: { email: createUserDto.email } });
    if (user) throw new BadRequestException('Usuario ya existe');

    createUserDto.password = await hash(createUserDto.password, this.configService.get('PASSWORD_SALT'));

    return await this.user.create({
      include: { user_role: { include: { role_ce: { where: { status: Status.Activo } } } } },
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
        name: createUserDto.name,
        lastName: createUserDto.lastName,
        phone: createUserDto.phone,
        address: createUserDto.address,
        creation_date: new Date(),
        creation_user: 'system',
        pais_ce: { connect: { id_pais: createUserDto.paisId, } },
        canton_ce: { connect: { id: createUserDto.cantonId, } },
        userType: <'EMPRESA' | 'GOBIERNO' | 'EMPRESA'>createUserDto.userType || 'CLIENTE',
        user_role: {
          createMany: {
            data: createUserDto.roles.map(roleId => ({ roleId }))
          }
        }
      },
    });
  }

  async registerUser(createUserDto: RegisterUserDto) {
    const user = await this.user.findUnique({ where: { email: createUserDto.email } });
    if (user) throw new BadRequestException('Usuario ya existe');

    createUserDto.password = await hash(createUserDto.password, this.configService.get('PASSWORD_SALT'));

    const allowedRoles = [Role.Comprador, Role.Vendedor];

    const newUser = await this.user.create({
      include: { user_role: { include: { role_ce: { where: { status: Status.Activo } } } }, pais_ce: true },
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
        name: createUserDto.name,
        lastName: createUserDto.lastName,
        phone: createUserDto.phone,
        address: createUserDto.address,
        creation_date: new Date(),
        creation_user: 'system',
        pais_ce: { connect: { id_pais: createUserDto.paisId, } },
        canton_ce: { connect: { id: createUserDto.cantonId, } },
        paypalEmail: createUserDto.paypalEmail,
        userType: <'EMPRESA' | 'GOBIERNO' | 'EMPRESA'>createUserDto.userType,
        user_role: {
          createMany: {
            data: allowedRoles.map(roleId => ({ roleId }))
          }
        }
      },
    });

    delete newUser.password;

    return {
      ...newUser,
      token: this.getJwtToken({ id: Number(newUser.id) })
    };
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.findByEmail(loginUserDto.email);
    const password = compareSync(loginUserDto.password, user.password);
    if (!password) throw new UnauthorizedException('Credenciales incorrectas');
    delete user.password;
    return {
      ...user,
      token: this.getJwtToken({ id: Number(user.id) })
    };
  }

  async checkToken(user: UserToken) {
    delete user.password;
    return {
      ...user,
      token: this.getJwtToken({ id: Number(user.id) })
    };
  }

  private getJwtToken(payload: { id: number }) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  async findAll(currentUser: UserToken) {

    const users = await this.user.findMany({
      where: { id: { not: currentUser.id } },
      include: {
        user_role: {
          select: {
            roleId: true,
          },
        },
        canton_ce: {
          include: {
            province_ce: true,
          }
        }
      },
      orderBy: {
        creation_date: 'desc',
      }
    });

    users.forEach(user => delete user.password);

    return users;
  }

  async findById(id: number) {
    const user = await this.user.findUnique({
      where: { id },
      include: {
        user_role: {
          include: { role_ce: true }
        }
      }
    });

    if (!user) throw new NotFoundException('No se encontro el usuario');

    return user;
  }

  private async findByEmail(email: string) {
    const user = await this.user.findUnique({
      where: { email: email },
      include: {
        user_role: {
          include: { role_ce: { where: { status: Status.Activo } } }
        },
        pais_ce: true
      }
    });

    if (!user) throw new NotFoundException('No se encontro el usuario');

    return user;
  }

  async update(id: number, updateAuthDto: UpdateAuthDto) {
    const oldUser = await this.findById(id);
    return this.user.update({
      where: { id },
      data: {
        name: updateAuthDto.name ?? oldUser.name,
        lastName: updateAuthDto.lastName ?? oldUser.lastName,
        phone: updateAuthDto.phone ?? oldUser.phone,
        paypalEmail: updateAuthDto.paypalEmail ?? oldUser.paypalEmail,
        address: updateAuthDto.address ?? oldUser.address,
        pais_ce: { connect: { id_pais: updateAuthDto.paisId ?? oldUser.paisId, } },
        canton_ce: { connect: { id: updateAuthDto.cantonId ?? oldUser.cantonId, } },
      },
    });
  }

  async updatePassword(user: UserToken, updateAuthDto: UpdatePasswordDto) {
    const isValidPassword = compareSync(updateAuthDto.oldPassword, user.password);

    if (!isValidPassword) throw new UnauthorizedException('Contraseña incorrecta');

    const newPassword = await hash(updateAuthDto.password, this.configService.get('PASSWORD_SALT'));

    await this.user.update({
      where: { id: user.id },
      data: {
        password: newPassword,
      }
    });

    return { message: 'Contraseña actualizada' };
  }

  async updatePaymentMethods(user: UserToken, updatePaymentMethodsDto: UpdatePaymentMethodsDto) {
    if (updatePaymentMethodsDto.allowBankTransfers && !updatePaymentMethodsDto.bankTransfersInfo.trim()) {
      throw new BadRequestException('Debe ingresar información de transferencia bancaria');
    }

    return this.user.update({
      where: { id: user.id },
      data: {
        allowPaypalPayments: updatePaymentMethodsDto.allowPaypalPayments,
        allowBankTransfers: updatePaymentMethodsDto.allowBankTransfers,
        bankTransfersInfo: updatePaymentMethodsDto.bankTransfersInfo,
      }
    });
  }

  async updateSellerDescription(userId: number, description: string) {
    const user = await this.findById(userId);
    return this.user.update({
      where: { id: user.id },
      data: {
        businessDescription: description,
      }
    });
  }


  async remove(id: number) {
    const user = await this.findById(id);
    return this.user.softDelete({ where: { id: user.id } });
  }

  async findUsersByType(type: UserType, currentUserId: number, filterUserDto: FilterUserDto) {
    if (!Object.values(UserType).includes(type)) throw new BadRequestException('Tipo de usuario no valido');

    const { page = 1, size = 10, search = '' } = filterUserDto;

    const data = await this.user.findMany({
      select: { id: true, name: true, lastName: true, email: true, phone: true, address: true, pais_ce: true, businessDescription: true, product: true },
      where: {
        user_role: { none: { role_ce: { id_role: Role.Admin } } },
        userType: type, id: { not: currentUserId },
        // ...(filterUserDto.name && { name: { contains: filterUserDto.name, mode: 'insensitive' } }),
        // ...(filterUserDto.email && { email: { contains: filterUserDto.email, mode: 'insensitive' } }),
        // ...(filterUserDto.phone && { phone: { contains: filterUserDto.phone, mode: 'insensitive' } }),
        // ...(filterUserDto.address && { address: { contains: filterUserDto.address, mode: 'insensitive' } }),
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { lastName: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } },
          { phone: { contains: search, mode: 'insensitive' } },
          { address: { contains: search, mode: 'insensitive' } },
          { pais_ce: { name: { contains: search, mode: 'insensitive' } } },
          { product: { some: { description: { contains: search, mode: 'insensitive' } } } },
          { product: { some: { predefinedProduct: { name: { contains: search, mode: 'insensitive' } } } } },
          { product: { some: { predefinedProduct: { category: { name: { contains: search, mode: 'insensitive' } } } } } },
        ]
      },
      skip: (page - 1) * size,
      take: size,
      orderBy: {
        creation_date: 'desc',
      }
    });

    const hasMore = data.length === size;

    return {
      data,
      hasMore,
    };
  }


  async updateProfileUserPicture(id: number, user: UserToken, file: Express.Multer.File) {
    let assetUrl = null;

    if (file) {

      // const directoryPath = join(__dirname, '..', '..', 'static', 'profile-pictures');
      // if (!existsSync(directoryPath)) mkdirSync(directoryPath, { recursive: true }); // recursively create directory for creaet two the firs static and the second products

      // const getUuid = crypto.randomUUID.bind(crypto);
      // const fileExtension = file.mimetype.split('/')[1];
      // fileName = `${getUuid()}.${fileExtension}`;
      // save file to disk
      // const filePath = join(directoryPath, fileName);
      // writeFileSync(filePath, file.buffer); // Save file manually after validation

      const result = await this.cloudinaryService.uploadAsset(file, 'image');
      assetUrl = result.url;

      // delete old image
      if (user.profilePicture) {
        const publicAssetId = (user.profilePicture.split('/').pop()).split('.').shift();
        await this.cloudinaryService.removeAsset(publicAssetId);
      }
    }

    return this.user.update({
      where: { id },
      data: {
        profilePicture: assetUrl,
      },
    });
  }
}

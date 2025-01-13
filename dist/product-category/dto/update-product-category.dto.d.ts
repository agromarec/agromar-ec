import { CreateProductCategoryDto } from './create-product-category.dto';
import { Status } from '@prisma/client';
declare const UpdateProductCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductCategoryDto>>;
export declare class UpdateProductCategoryDto extends UpdateProductCategoryDto_base {
    status?: Status;
}
export {};

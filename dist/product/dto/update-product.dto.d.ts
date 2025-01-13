import { CreateProductDto } from './create-product.dto';
import { Status } from '@prisma/client';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    status?: Status;
}
export {};

import { CreatePredefinedProductDto } from './create-predefined-product.dto';
import { Status } from '@prisma/client';
declare const UpdatePredefinedProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePredefinedProductDto>>;
export declare class UpdatePredefinedProductDto extends UpdatePredefinedProductDto_base {
    status?: Status;
}
export {};

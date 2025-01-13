import { CreateUnitOfMesureDto } from './create-unit-of-mesure.dto';
import { Status } from '@prisma/client';
declare const UpdateUnitOfMesureDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUnitOfMesureDto>>;
export declare class UpdateUnitOfMesureDto extends UpdateUnitOfMesureDto_base {
    status?: Status;
}
export {};

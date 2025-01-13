import { PaginationDTO } from 'src/common/dtos/pagination.dto';
export declare class FilterUserDto extends PaginationDTO {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    search?: string;
}

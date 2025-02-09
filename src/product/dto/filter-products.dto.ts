import { IsOptional, IsString } from 'class-validator';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';

export class FilterProductsDto extends PaginationDTO {

  @IsString()
  @IsOptional()
  category: string;

  @IsString()
  @IsOptional()
  predefinedProduct: string;
}
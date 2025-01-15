import { IsEmail, IsOptional, IsString } from 'class-validator';
import { PaginationDTO } from '../../common/dtos/pagination.dto';


export class FilterUserDto extends PaginationDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  search?: string;
}

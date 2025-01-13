import { Transform } from 'class-transformer';
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  phone: string;

  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => parseInt(value))
  paisId: number;

  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => parseInt(value))
  cantonId: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  userId?: number;

  @IsString()
  @IsEmail()
  paypalEmail: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1) // Optionally, enforce a minimum number of items
  @IsNumber({}, { each: true })
  roles: number[];

  @IsString()
  @IsOptional()
  userType?: string;
}

import { IsBoolean, IsOptional, IsString } from 'class-validator';


export class UpdatePaymentMethodsDto {

  @IsBoolean()
  @IsOptional()
  allowPaypalPayments: boolean;

  @IsBoolean()
  @IsOptional()
  allowBankTransfers: boolean;

  @IsString()
  @IsOptional()
  bankTransfersInfo: string;
}
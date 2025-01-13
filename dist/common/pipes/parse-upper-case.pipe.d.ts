import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseUpperCasePipe implements PipeTransform {
    transform(value: any, _: ArgumentMetadata): string;
}

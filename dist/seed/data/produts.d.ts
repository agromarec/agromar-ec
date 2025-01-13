import { Prisma } from '@prisma/client';
export declare const GENERATE_PRODUCT_DATA: (sellerId: number, unitOfMesures: Prisma.unit_of_measureGetPayload<{
    select: {
        abreviature: true;
        id: true;
    };
}>[]) => Prisma.predefined_productCreateInput[];

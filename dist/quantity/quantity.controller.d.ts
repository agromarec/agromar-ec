import { QuantityService } from './quantity.service';
export declare class QuantityController {
    private readonly quantityService;
    constructor(quantityService: QuantityService);
    findAll(): Promise<{
        productQuantity: number;
        predefinedProductQuantity: number;
        productCategoryQuantity: number;
        unitOfMeasureQuantity: number;
        usersQuantity: number;
    }>;
}

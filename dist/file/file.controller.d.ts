import { FileService } from './file.service';
import { Response } from 'express';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    findProductImage(res: Response, imageName: string): void;
}

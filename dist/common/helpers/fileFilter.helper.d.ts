interface FileFilterHelper {
    req: Express.Request;
    file: Omit<Express.Multer.File, 'stream'>;
    callback: (a: Error, b: boolean) => void;
    validExtensions?: string[];
    maxFileSize?: number;
}
export declare const fileFilter: (fileFilterHelperOpts: FileFilterHelper) => void;
export {};

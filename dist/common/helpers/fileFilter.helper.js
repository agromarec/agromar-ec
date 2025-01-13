"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const fileFilter = (fileFilterHelperOpts) => {
    const { file, callback, validExtensions = ['jpg', 'jpeg', 'png'], maxFileSize = 0 } = fileFilterHelperOpts;
    if (!file)
        return callback(new Error('File is empty'), false);
    const fileExptension = file.mimetype.split('/')[1];
    if (!validExtensions.includes(fileExptension))
        return callback(null, false);
    console.log({ file, maxFileSize, size: file.size });
    if (file.size > maxFileSize)
        return callback(null, false);
    callback(null, false);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=fileFilter.helper.js.map
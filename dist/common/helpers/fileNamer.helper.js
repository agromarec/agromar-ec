"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileNamer = void 0;
const fileNamer = (_, file, callback) => {
    const getUuid = crypto.randomUUID.bind(crypto);
    if (!file)
        return callback(new Error('File is empty'), false);
    const fileExtension = file.mimetype.split('/')[1];
    const fileName = `${getUuid()}.${fileExtension}`;
    callback(null, fileName);
};
exports.fileNamer = fileNamer;
//# sourceMappingURL=fileNamer.helper.js.map
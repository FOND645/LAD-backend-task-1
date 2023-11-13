"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileAvailableToWrite = void 0;
var fs_1 = require("fs");
function isFileAvailableToWrite(path) {
    try {
        (0, fs_1.accessSync)(path, fs_1.constants.W_OK);
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.isFileAvailableToWrite = isFileAvailableToWrite;

import {accessSync, constants} from 'fs';

export function isFileAvailableToWrite(path: string) {
    try {
        accessSync(path, constants.W_OK);
        return true;
    } catch (error) {
        return false;
    }
}

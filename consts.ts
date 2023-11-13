import { argument, jsonSettings } from './types';

export const defaultSettings: jsonSettings = {
    defaultPoint: 'Moscow',
};

export const availableArguments: argument[] = [
    { literal: '-l', type: 'null' },
    { literal: '-s', type: 'string' },
    { literal: '-h', type: 'null' },
    { literal: '-t', type: 'string' },
];

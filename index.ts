import {resolve} from 'path';
import { weather_api } from './apiClass';
import {writeFileSync, readFileSync} from 'fs';
import { isFileAvailableToWrite } from './functions';
import { defaultSettings } from './consts';
import { jsonSettings } from './types';
const jsonSettingsPath = resolve(__dirname, 'settings.json');

const settings = (() => {
    if (!isFileAvailableToWrite(jsonSettingsPath)) {
        writeFileSync(jsonSettingsPath, JSON.stringify(defaultSettings), {
            encoding: 'utf-8',
        });
        return defaultSettings;
    } else {
        return JSON.parse(
            readFileSync(jsonSettingsPath, { encoding: 'utf-8' })
        ) as jsonSettings;
    }
})();

const weatherApi = new weather_api();

const inputArguments = process.argv.slice(2);

if (inputArguments.includes('-h')) {
    weatherApi.printHelp();
    process.exit(0);
} else if (inputArguments.includes('-s')) {
    const newTargetArgumentIndex =
        inputArguments.findIndex((Arg) => Arg === '-s') + 1;
    const newTarget = inputArguments[newTargetArgumentIndex];
    settings.defaultPoint = newTarget;
    writeFileSync(jsonSettingsPath, JSON.stringify(settings), {
        encoding: 'utf-8',
    });
    weatherApi.getWeatherByPointName(settings.defaultPoint).then((result) => {
        console.log(result);
        process.exit(0);
    });
} else if (inputArguments.includes('-t')) {
    const targetArgumentIndex =
        inputArguments.findIndex((Arg) => Arg === '-t') + 1;
    const target = inputArguments[targetArgumentIndex];
    weatherApi.getWeatherByPointName(target).then((result) => {
        console.log(result);
        process.exit(0);
    });
} else if (inputArguments.includes('-c')) {
    const coordsArgumentIndex =
        inputArguments.findIndex((Arg) => Arg === '-c') + 1;
    const coords = inputArguments[coordsArgumentIndex]
        .split(',')
        .map((Str) => +Str);
    weatherApi.getWeatherByCoords(coords[0], coords[1]).then((result) => {
        console.log(result);
        process.exit(0);
    });
} else if (inputArguments.includes('-l')) {
    weatherApi.getLoaclWeather().then((result) => {
        console.log(result);
        process.exit(0);
    });
}


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var apiClass_1 = require("./apiClass");
var fs_1 = require("fs");
var functions_1 = require("./functions");
var consts_1 = require("./consts");
var jsonSettingsPath = (0, path_1.resolve)(__dirname, 'settings.json');
var settings = (function () {
    if (!(0, functions_1.isFileAvailableToWrite)(jsonSettingsPath)) {
        (0, fs_1.writeFileSync)(jsonSettingsPath, JSON.stringify(consts_1.defaultSettings), {
            encoding: 'utf-8',
        });
        return consts_1.defaultSettings;
    }
    else {
        return JSON.parse((0, fs_1.readFileSync)(jsonSettingsPath, { encoding: 'utf-8' }));
    }
})();
var weatherApi = new apiClass_1.weather_api();
var inputArguments = process.argv.slice(2);
if (inputArguments.includes('-h')) {
    weatherApi.printHelp();
    process.exit(0);
}
else if (inputArguments.includes('-s')) {
    var newTargetArgumentIndex = inputArguments.findIndex(function (Arg) { return Arg === '-s'; }) + 1;
    var newTarget = inputArguments[newTargetArgumentIndex];
    settings.defaultPoint = newTarget;
    (0, fs_1.writeFileSync)(jsonSettingsPath, JSON.stringify(settings), {
        encoding: 'utf-8',
    });
    weatherApi.getWeatherByPointName(settings.defaultPoint).then(function (result) {
        console.log(result);
        process.exit(0);
    });
}
else if (inputArguments.includes('-t')) {
    var targetArgumentIndex = inputArguments.findIndex(function (Arg) { return Arg === '-t'; }) + 1;
    var target = inputArguments[targetArgumentIndex];
    weatherApi.getWeatherByPointName(target).then(function (result) {
        console.log(result);
        process.exit(0);
    });
}
else if (inputArguments.includes('-c')) {
    var coordsArgumentIndex = inputArguments.findIndex(function (Arg) { return Arg === '-c'; }) + 1;
    var coords = inputArguments[coordsArgumentIndex]
        .split(',')
        .map(function (Str) { return +Str; });
    weatherApi.getWeatherByCoords(coords[0], coords[1]).then(function (result) {
        console.log(result);
        process.exit(0);
    });
}
else if (inputArguments.includes('-l')) {
    weatherApi.getLoaclWeather().then(function (result) {
        console.log(result);
        process.exit(0);
    });
}
else {
    weatherApi.getWeatherByPointName(settings.defaultPoint).then(function (result) {
        console.log(result);
        process.exit(0);
    });
}

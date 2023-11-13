"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weather_api = void 0;
var axios_1 = require("axios");
var localization_1 = require("./localization");
var weather_api = /** @class */ (function () {
    function weather_api() {
        this.localAdressInfo = new Promise(function (resolve, reject) {
            axios_1.default
                .get('http://ip-api.com/json')
                .then(function (response) { return resolve(response.data); });
        });
    }
    weather_api.prototype.printHelp = function () {
        console.log("\u041F\u041E\u041C\u041E\u0429\u042C \u041F\u041E \u041F\u0420\u041E\u0413\u0420\u0410\u041C\u041C\u0415:\n        \u041A\u043B\u044E\u0447    \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435    \u042D\u0444\u0444\u0435\u043A\u0442\n        -h                  \u041F\u043E\u043C\u043E\u0449\u044C \u043F\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435\n        -l      null        \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u043E\u0433\u043E\u0434\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 IP \u0430\u0434\u0440\u0435\u0441\u0430\n        -s      string      \u0418\u0437\u043C\u0435\u043D\u044F\u0435\u0442 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0440\u0435\u0433\u0438\u043E\u043D\n        -t      string      \u0420\u0430\u0437\u043E\u0432\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u043E\u0433\u043E\u0434\u0435 \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435\n        -c      \"lon,lat\"   \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u043E\u0433\u043E\u0434\u0435 \u043F\u043E \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430\u043C, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 -c \"56.92, 82.91\"");
    };
    weather_api.prototype.getStringWeather = function (weatherSet) {
        console.log(weatherSet);
        console.log();
        var cloudcover = weatherSet.cloudcover, lifted_index = weatherSet.lifted_index, prec_amount = weatherSet.prec_amount, prec_type = weatherSet.prec_type, rh2m = weatherSet.rh2m, temp2m = weatherSet.temp2m, timepoint = weatherSet.timepoint, weather = weatherSet.weather, wind10m = weatherSet.wind10m;
        return "".concat(localization_1.translator[weather], ",\n\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ").concat(temp2m, "\u00B0\u0421,\n\u041E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u043E\u0437\u0434\u0443\u0445\u0430: ").concat(rh2m, ",\n").concat(localization_1.translator[prec_type], " ").concat(localization_1.precipitationScale[prec_amount], ",\n").concat(wind10m.speed === 1
            ? localization_1.windScale[wind10m.speed]
            : "\u0412\u0435\u0442\u0435\u0440 ".concat(localization_1.translator[wind10m.direction], ", ").concat(localization_1.windScale[wind10m.speed]), ",\n\u041E\u0431\u043B\u0430\u0447\u043D\u043E\u0441\u0442\u044C: ").concat(localization_1.cloudScale[cloudcover]);
    };
    weather_api.prototype.getWeatherByCoords = function (lat, lon) {
        return __awaiter(this, void 0, void 0, function () {
            var weather, coordinateAdress, weatherSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get("http://www.7timer.info/bin/api.pl?lon=".concat(lon, "&lat=").concat(lat, "&product=civil&output=json&unit=Metric"))];
                    case 1:
                        weather = _a.sent();
                        return [4 /*yield*/, axios_1.default.get("https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(lat, "&lon=").concat(lon))];
                    case 2:
                        coordinateAdress = (_a.sent()).data.display_name;
                        weatherSet = weather.data.dataseries[0];
                        return [2 /*return*/, "\u041F\u043E\u0433\u043E\u0434\u0430 \u0432 \u043C\u0435\u0441\u0442\u0435:\n".concat(coordinateAdress, "\n(").concat(lat, ", ").concat(lon, "),\n").concat(this.getStringWeather(weatherSet))];
                }
            });
        });
    };
    weather_api.prototype.getWeatherByPointName = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var pointData, _a, lat, lon, searchedResult, weather;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get("https://nominatim.openstreetmap.org/search?q=".concat(query, "&format=json"))];
                    case 1:
                        pointData = _b.sent();
                        _a = (function () {
                            if (Array.isArray(pointData.data)) {
                                return {
                                    searchedResult: pointData.data[0].display_name,
                                    lat: pointData.data[0].lat,
                                    lon: pointData.data[0].lon,
                                };
                            }
                            else {
                                return {
                                    searchedResult: pointData.data.display_name,
                                    lat: pointData.data.lat,
                                    lon: pointData.data.lon,
                                };
                            }
                        })(), lat = _a.lat, lon = _a.lon, searchedResult = _a.searchedResult;
                        return [4 /*yield*/, axios_1.default.get("http://www.7timer.info/bin/api.pl?lon=".concat(lon, "&lat=").concat(lat, "&product=civil&output=json&unit=Metric"))];
                    case 2:
                        weather = _b.sent();
                        return [2 /*return*/, "\u041F\u043E\u0433\u043E\u0434\u0430 \u043F\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(query, "\n").concat(searchedResult, ",\n(").concat(lon, ", ").concat(lat, "),\n").concat(this.getStringWeather(weather.data.dataseries[0]))];
                }
            });
        });
    };
    weather_api.prototype.getLoaclWeather = function () {
        return __awaiter(this, void 0, void 0, function () {
            var localAdressInfo, lon, lat, weather;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.localAdressInfo];
                    case 1:
                        localAdressInfo = _a.sent();
                        lon = localAdressInfo.lon, lat = localAdressInfo.lat;
                        return [4 /*yield*/, axios_1.default.get("http://www.7timer.info/bin/api.pl?lon=".concat(lon, "&lat=").concat(lat, "&product=civil&output=json&unit=Metric"))];
                    case 2:
                        weather = _a.sent();
                        return [2 /*return*/, "\u041F\u043E\u0433\u043E\u0434\u0430 \u043F\u043E \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044E IP: ".concat(localAdressInfo.city, "\n").concat(this.getStringWeather(weather.data.dataseries[0]))];
                }
            });
        });
    };
    return weather_api;
}());
exports.weather_api = weather_api;

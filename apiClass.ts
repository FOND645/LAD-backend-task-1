import axios from 'axios';
import {
    geointResponse,
    localAdressInfo,
    weatherDataSeries,
    weatherResponse,
} from './types';
import {
    cloudScale,
    precipitationScale,
    translator,
    windScale,
} from './localization';

export class weather_api {
    localAdressInfo: Promise<localAdressInfo>;
    targetPointName: string | undefined;
    constructor() {
        this.localAdressInfo = new Promise<localAdressInfo>(
            (resolve, reject) => {
                axios
                    .get<localAdressInfo>('http://ip-api.com/json')
                    .then((response) => resolve(response.data));
            }
        );
    }

    printHelp() {
        console.log(`ПОМОЩЬ ПО ПРОГРАММЕ:
        Ключ    Значение    Эффект
        -h                  Помощь по программе
        -l      null        Получить информацию о погоде на основе IP адреса
        -s      string      Изменяет целевой регион
        -t      string      Разово получить информацию о погоде в указаном месте
        -c      "lon,lat"   Получить информацию о погоде по координатам, например -c "56.92, 82.91"`);
    }

    getStringWeather(weatherSet: weatherDataSeries) {
        const {
            cloudcover,
            lifted_index,
            prec_amount,
            prec_type,
            rh2m,
            temp2m,
            timepoint,
            weather,
            wind10m,
        } = weatherSet;
        return `${translator[weather]},
Температура: ${temp2m}°С,
Относительная влажность воздуха: ${rh2m},
${translator[prec_type]} ${precipitationScale[prec_amount]},
${
    wind10m.speed === 1
        ? windScale[wind10m.speed]
        : `Ветер ${translator[wind10m.direction]}, ${windScale[wind10m.speed]}`
},
Облачность: ${cloudScale[cloudcover]}`;
    }

    async getWeatherByCoords(lat: number, lon: number) {
        const weather = await axios.get<weatherResponse>(
            `http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json&unit=Metric`
        );
        const coordinateAdress = (
            await axios.get<geointResponse>(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            )
        ).data.display_name;
        const weatherSet = weather.data.dataseries[0];
        return `Погода в месте:
${coordinateAdress}
(${lat}, ${lon}),
${this.getStringWeather(weatherSet)}`;
    }

    async getWeatherByPointName(query: string) {
        const pointData = await axios.get<geointResponse[] | geointResponse>(
            `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
        );
        const { lat, lon, searchedResult } = (() => {
            if (Array.isArray(pointData.data)) {
                return {
                    searchedResult: pointData.data[0].display_name,
                    lat: pointData.data[0].lat,
                    lon: pointData.data[0].lon,
                };
            } else {
                return {
                    searchedResult: pointData.data.display_name,
                    lat: pointData.data.lat,
                    lon: pointData.data.lon,
                };
            }
        })();
        const weather = await axios.get<weatherResponse>(
            `http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json&unit=Metric`
        );
        return `Погода по результату запроса: ${query}
${searchedResult},
(${lon}, ${lat}),
${this.getStringWeather(weather.data.dataseries[0])}`;
    }

    async getLoaclWeather() {
        const localAdressInfo = await this.localAdressInfo;
        const { lon, lat } = localAdressInfo;
        const weather = await axios.get<weatherResponse>(
            `http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json&unit=Metric`
        );
        return `Погода по местоположению IP: ${localAdressInfo.city}
${this.getStringWeather(weather.data.dataseries[0])}`
    }
}

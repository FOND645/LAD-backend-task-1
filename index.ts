import axios from "axios";

class weather_api {
    localAdressInfo: localAdressInfo | undefined;
    targetCity: string | undefined;
    constructor() {
        Promise.all([this.updateAdressInfo()]).then(() => console.log());
    }

    async updateAdressInfo() {
        this.localAdressInfo = (await axios.get<localAdressInfo>("http://ip-api.com/json")).data;
    }

    printHelp() {
        console.log(`ПОМОЩЬ ПО ПРОГРАММЕ:
        Ключ    Значение    Эффект
        -s      string      Изменяет целевой город (если не указан - город определяется по IP)
        -t      date-like   Время прогноза или из прошлого (если не указано - погода текущий момент)
        -h                  Помощь по программе`);
    }

    async getWeatherByCoords(lon: number, lat: number) {}
}

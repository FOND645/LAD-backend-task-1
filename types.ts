export interface localAdressInfo {
    status: 'success' | string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
}

export interface weatherResponse {
    product: string;
    init: string;
    dataseries: weatherDataSeries[];
}

export interface weatherDataSeries {
    timepoint: number;
    cloudcover: number;
    lifted_index: number;
    prec_type: 'snow' | 'rain' | 'frzr' | 'icep' | 'none';
    prec_amount: number;
    temp2m: number;
    rh2m: string;
    wind10m: {
        direction: 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';
        speed: number;
    };
    weather:
        | 'clearday'
        | 'clearnight'
        | 'pcloudyday'
        | 'pcloudynight'
        | 'mcloudyday'
        | 'mcloudynight'
        | 'cloudyday'
        | 'cloudynight'
        | 'humidday'
        | 'humidnight'
        | 'lightrainday'
        | 'lightrainnight'
        | 'oshowerday'
        | 'oshowernight'
        | 'ishowerday'
        | 'ishowernight'
        | 'lightsnowday'
        | 'lightsnownight'
        | 'rainday'
        | 'rainnight'
        | 'snowday'
        | 'snownight'
        | 'rainsnowday'
        | 'rainsnownight';
}

export interface geointResponse {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    class: string;
    type: string;
    place_rank: number;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    boundingbox: [string, string, string, string];
}

export interface jsonSettings {
    defaultPoint: string;
}

export interface argument {
    literal: string;
    type: 'string' | 'null' | 'number' | 'array';
    value?: string | number;
    enable?: boolean;
}

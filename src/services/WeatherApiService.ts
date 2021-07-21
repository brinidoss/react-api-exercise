import axios from "axios";

const weatherUrl: string = 'https://api.weather.gov/gridpoints/DTX/65,33/forecast';

export function fetchWeather(): Promise<any[]> {
    return axios.get(weatherUrl).then((response) => {
        return response.data.properties.periods;
    })
}





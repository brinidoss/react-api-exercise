import { useEffect, useState } from "react";
import { fetchWeather } from "../../services/WeatherApiService";

export function WeatherForecast() {
    const [weather, setWeather] = useState<any[]>([]);

    useEffect(() => {
        fetchWeather().then((data) => {
            setWeather(data);
        })
    }, [] );

    return (
        <div className="WeatherForecast">
            <h2>Weather</h2>
                <ul>
                    {weather.map((weather, index) => 
                        <li key={`${weather.name}-${index}`}>
                            <p>{weather.name}</p>
                            <p>{weather.temperature}</p>
                            <img src={weather.icon} alt="weather"/>
                            <p>{weather.detailedForecast}</p>
                        </li>
                    )}
                </ul>
        </div>
    )
}


import {useEffect, useState} from "react";
import axios from 'axios';
import './weather.css';


const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Tehran");
    const apiKey = '268dfdb177d5ac39ba9954f44d00292f'


    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                setWeatherData(response.data);
                console.log(weatherData, 'weatherData')
                console.log(response, 'response')
                console.log(response.data, 'response.data')
            } catch (error) {
                console.error("error: ", error);
            }
        };
        fetchWeather()
    }, [city]);

    return(
        <div className="weather-container">
            <input type="text" value={city} onChange={event => setCity(event.target.value)}></input>
            {weatherData &&(
            <div>
                <h1 className="weather-tittle">{weatherData?.name}</h1>
                <h2 className="weather-details">{weatherData?.main.temp}</h2>
                <h2 className="weather-details">{weatherData?.weather[0].main}</h2>

            </div>
            )}
        </div>

    )
}

export default Weather
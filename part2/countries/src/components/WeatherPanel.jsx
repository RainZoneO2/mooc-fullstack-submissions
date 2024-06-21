import weatherService from '../services/weather'
import { useEffect, useState } from 'react'

const WeatherPanel = ({cityName, lat, lng}) => {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        if (lat && lng) {
            console.log('Fetching weather data for:', cityName, lat, lng)
            weatherService.getCityWeather({lat, lng})
            .then(returnedData => {
                console.log('Weather data received:', returnedData);
                setWeatherData(returnedData);
            })
            .catch(err => {
                console.error('Error fetching weather data:', err);
            })
        }
    }, [cityName, lat, lng])

    if (!weatherData) {
        return null;
    }

    return (
        <div>
            <h2>Weather in {cityName}</h2>
            <p>Temperature: {weatherData.main.temp} celsius</p>
            <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                alt={weatherData.weather[0].description}
            />
            <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
    )
}

export default WeatherPanel
import axios from 'axios';

const api_key = import.meta.env.VITE_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getCityWeather = ({ lat, lng }) => {
    console.log('API Key:', api_key);
    console.log('Requesting weather for coordinates:', lat, lng);
    
    const request = axios.get(`${baseUrl}?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`);
    return request.then(response => response.data)
};

export default { getCityWeather };

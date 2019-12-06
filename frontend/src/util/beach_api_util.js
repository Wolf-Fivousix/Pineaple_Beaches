import axios from 'axios';
import {weatherAPIKey} from "../api_keys";

export const fetchAllBeaches = () => (
    axios.get("/api/beaches")
);

export const fetchTest = () => (
    axios.get("/api/beaches/test")
);

export const fetchBeachById = (beachId) => (
    axios.get(`/api/beaches/${beachId}`)
);

export const updateBeachTemperature = ({ _id, lat, lon }) => (
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`)
        .then(weatherData => {
                    axios.patch(`/api/beaches/${_id}`, {
                        temperature: weatherData.data.main.temp,
                        date: new Date()
                    })
                    return weatherData;
                }
));
# [Pineapple Beaches](https://pineapple-beaches.herokuapp.com/)
![](images/pineappleBeaches.gif)
Pineapple Beaches is a website where users can interact with posts and beaches to understand more information about local or travel locations which involve beaches. With real time weather data provided by a third party Web API.

Developed by: [Claudius Solomon](https://github.com/clauddyf), [Diego Bueno](https://github.com/Wolf-Fivousix), [Nathan Reinhardt](https://github.com/Ticonderago)

## Table of Contents
* [Technologies](#technologies)
* [Features](#features)
* [Code Snipets](#code-snipets)
* [Screenshots](#screenshots)

## Technologies
* JavaScript
* React
* Redux
* Node.js
* Express.js
* MongoDB
* Heroku
* JSON
* CSS3
* HTML5

## Features

 * Secure backend to frontend with user authentication using BCrypt.
 * Beaches are displayed on the homepage and marked on the google map.
 * Google Maps Api to see where a beach is located relative to its city.
 * Registered users can review a beach.
 * Real time weather data fetching.
 
## Code Snipets
 ### Web Weather API with CORS protection
 Leveraging [Open Weather](https://openweathermap.org/) API we can provide real time weather data anywhere in the world. In order to balance server load and the most recent data, we concluded that an update every hour sufice the needs for this project. By taking the difference between the last update of our database and the current time we decide if the call should be made. If it happens, we utilize a Promise and local state update to quickly display the updated information.
 ```JavaScript
 updateWeatherData() {
        // Update if more than 1 hour since last update.
        const timeDifference = (Date.now() - new Date(this.state.date).getTime()) / 1000 / 60;

        if (Math.floor(timeDifference) > 60) {
            const payload = {
                _id: this.state._id,
                lat: this.state.lat,
                lon: this.state.lon
            };
            this.props.updateBeachTemperature(payload)
                .then(newTemp => this.setState({ temperature: newTemp }));
        }
    }
 ```
 
 One of the issues that arise from making API call's to external websites from the client side is the Cross-Origin Resource Sharing (CORS). In order to have that functionality we customized Axios calls in the backend while providing a custom proxy address for Heroku.
```JavaScript
export const updateBeachTemperature = ({ _id, lat, lon }) => (
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`)
        .then(weatherData => {
                    axios.patch(`/api/beaches/${_id}`, {
                        temperature: weatherData.data.main.temp,
                        date: new Date()
                    })
                    return weatherData;
                }
));
```
 
## Screenshots
![](images/screenshot1.jpeg)

![](images/screenshot2.jpeg)

![](images/screenshot3.jpeg)

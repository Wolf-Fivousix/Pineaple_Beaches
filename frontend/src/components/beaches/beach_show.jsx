import React from "react";
import ReviewComposeContainer from '../reviews/review_composer_container';
import ReviewsContainer from '../reviews/reviews_container';
import axios from 'axios';
import ReviewNavbarContainer from "../nav/review_navbar_container";
import { weatherAPIKey } from "../../google_api_key";

class BeachShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            location: "",
            crowdLevel: 0,
            temperature: 0,
            lat: 0,
            lon: 0,
            date: 0
        };
    }

    componentDidMount() {
        console.log("mounted");
        // debugger
        this.props.fetchBeachById(this.props.match.params.beach_id)
            .then(beach => {
                this.setState(beach);
            })
            .catch(errors => console.log("ID Fetch failed"))
    }
    
    updateWeatherData() {
        console.log("Updating data...");
        const timeDifference = (Date.now() - new Date(this.state.date).getTime()) / 1000 / 60;
        console.log(Math.floor(timeDifference));
        // It has been more than 1 hour since last update.
        if (Math.floor(timeDifference) > 60) {
            console.log("Update beep boop");
            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.beach.lat}&lon=${this.props.beach.lon}&appid=${weatherAPIKey}`)
                .then(response => {
                    // Prioritize updating the user.
                    this.setState({
                        temperature: response.data.main.temp,
                        date: "Date.now()"
                    });
                    // Now update the database.
                    // debugger;
                    const payload = {
                        _id: this.props.match.params.beach_id,
                        temperature: response.data.main.temp,
                        date: new Date()
                    }
                    this.props.updateBeachTemperature(payload);
                })
                .catch(errors => console.log(errors));

        }
        else console.log("No update needed");
    }


    render() {
        const tempCelsius = Math.floor(this.state.temperature - 273.15);
        const tempFahrenheit = Math.floor((this.state.temperature - 273.15) * 9 / 5 + 32);

        let beach_id;
        if (this.props.beach) {
            beach_id = this.props.beach._id
        }
        
        return (
            <div className="beach-show-container">
                <ReviewNavbarContainer/>
                <h1 className="beach-show-name">{
                    // need to get name of beach
                }</h1>
                <ReviewsContainer beach_id={beach_id}/>
                <ReviewComposeContainer beach_id={beach_id}/>
                <p>Temperature is: {tempCelsius + " Celsius and " + tempFahrenheit + " Fahrenheit"}</p>
                <h1 className="trade-mark-reviews">®</h1>
            </div>
        );
    }
};

export default BeachShow;
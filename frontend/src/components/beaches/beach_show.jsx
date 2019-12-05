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
            date: 0, 
            reviews: []
        };
    }

    componentDidMount() {
        this.props.fetchBeachById(this.props.match.params.beach_id)
            .then(beach => this.setState(beach))
            .then(() => this.updateWeatherData())
            .catch(errors => console.log("ID Fetch failed"))

       this.props.fetchBeachReviews(this.props.match.params.beach_id);
    //    this.props.receiveCurrentUser()
    }
    
    updateWeatherData() {
        // Update if more than 1 hour since last update.
        const timeDifference = (Date.now() - new Date(this.state.date).getTime()) / 1000 / 60;
        if (Math.floor(timeDifference) > 60) {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.beach.lat}&lon=${this.props.beach.lon}&appid=${weatherAPIKey}`)
                .then(response => {
                    // Prioritize updating the user.
                    this.setState({
                        temperature: response.data.main.temp,
                        date: Date.now()
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
    }


    render() {
        const tempCelsius = Math.floor(this.state.temperature - 273.15);
        const tempFahrenheit = Math.floor((this.state.temperature - 273.15) * 9 / 5 + 32);

        let beach_id;
        if (this.props.beach) {
            beach_id = this.props.beach._id
            // debugger
        }

        if (this.props.loggedIn) {
            return (
                <div className="beach-show-container">
                    <ReviewNavbarContainer/>
                    <div className="beach-container">
                        <div className="beach-name-container">
                            <h1 className="beach-show-location">{this.state.location} - </h1>
                            <h1 className="beach-show-name">{this.state.name}</h1>
                        </div>
                        <div className="beach-detail-container">
                            <div className="description-container">
                                <h3 className="beach-desc-t">Description:  </h3>
                                <h3 className="beach-show-description">{this.state.description}</h3>
                            </div>
                            <div className="crowd-container">
                                <h3 className="beach-crowd-t">Crowd-Level:  </h3>
                                <h3 className="beach-show-crowd">{this.state.crowdLevel}</h3>
                            </div>
                            <div className="temperature-container">
                                <h3 className="beach-temp-t">Temperature:  </h3>
                                <h3 className="beach-show-temperature">{tempCelsius + "  | " + tempFahrenheit + ""}</h3>
                            </div>
                        </div>
                    </div>
                    <ReviewsContainer beach_id={beach_id}/>
                    <ReviewComposeContainer beach_id={beach_id}/>
                    <h1 className="trade-mark-reviews">®</h1>
                </div>
            );
        } else {
            return (
                <div className="beach-show-container">
                    <ReviewNavbarContainer/>
                    <div className="beach-container">
                        <div className="beach-name-container">
                            <h1 className="beach-show-location">{this.state.location} - </h1>
                            <h1 className="beach-show-name">{this.state.name}</h1>
                        </div>
                        <div className="beach-detail-container">
                            <div className="description-container">
                                <h3 className="beach-desc-t">Description:  </h3>
                                <h3 className="beach-show-description">{this.state.description}</h3>
                            </div>
                            <div className="crowd-container">
                                <h3 className="beach-crowd-t">Crowd-Level:  </h3>
                                <h3 className="beach-show-crowd">{this.state.crowdLevel}</h3>
                            </div>
                            <div className="temperature-container">
                                <h3 className="beach-temp-t">Temperature:  </h3>
                                <h3 className="beach-show-temperature">{tempCelsius + "  | " + tempFahrenheit + ""}</h3>
                            </div>
                        </div>
                    </div>
                    <ReviewsContainer beach_id={beach_id}/>
                    <h1 className="trade-mark-reviews">®</h1>
                </div>
            );
        }
    }
};

export default BeachShow;
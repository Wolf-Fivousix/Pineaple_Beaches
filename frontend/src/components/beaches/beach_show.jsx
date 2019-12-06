import React from "react";
import ReviewComposeContainer from '../reviews/review_composer_container';
import ReviewsContainer from '../reviews/reviews_container';
import ReviewNavbarContainer from "../nav/review_navbar_container";

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
        this.updateWeatherData = this.updateWeatherData.bind(this);
    }

    componentDidMount() {
        this.props.fetchBeachById(this.props.match.params.beach_id)
            .then(beach => this.setState(beach))
                .catch(errors => console.log("ID Fetch failed"))
            .then(() => this.updateWeatherData())
                .catch (errors => console.log("Weather Data Update failed"));
            

        this.props.fetchBeachReviews(this.props.match.params.beach_id);
    }
    
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


    render() {
        const tempCelsius = Math.floor(this.state.temperature - 273.15);
        const tempFahrenheit = Math.floor((this.state.temperature - 273.15) * 9 / 5 + 32);

        let beach_id;
        if (this.props.beach) {
            beach_id = this.props.beach._id
        }

        if (this.props.loggedIn) {
            return (
                <div className="beach-show-container">
                    <ReviewNavbarContainer/>
                    <h1 className="beach-show-name">{
                        this.state.name
                    }</h1>
                    <ReviewsContainer beach_id={beach_id}/>
                    <ReviewComposeContainer beach_id={beach_id}/>
                    <p>Temperature is: {tempCelsius + " Celsius and " + tempFahrenheit + " Fahrenheit"}</p>
                    <h1 className="trade-mark-reviews">®</h1>
                </div>
            );
        } else {
            return (
                <div className="beach-show-container">
                    <ReviewNavbarContainer/>
                    <h1 className="beach-show-name">{
                        // need to get name of beach
                    }</h1>
                    <ReviewsContainer beach_id={beach_id}/>
                    <p>Temperature is: {tempCelsius + " Celsius and " + tempFahrenheit + " Fahrenheit"}</p>
                    <h1 className="trade-mark-reviews">®</h1>
                </div>
            );
        }
    }
};

export default BeachShow;
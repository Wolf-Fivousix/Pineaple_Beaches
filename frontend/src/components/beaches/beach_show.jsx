import React from "react";
import ReviewComposeContainer from '../reviews/review_composer_container';
import ReviewsContainer from '../reviews/reviews_container';
import axios from 'axios';
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
            date: 0
        };
    }

    componentDidMount() {
        console.log("mounted");
    }
    
    updateWeatherData() {
        console.log("Updating data...");
        console.log(this.props.beach)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=37.771267&lon=-122.512803&appid=`)
            .then(response => {
                console.log(response.data.main.temp);
                const newTempF = response.data.main.temp;
                newTempF = (newTempF - 273.15) * 9 / 5 + 32;
                console.log(newTempF);
            })
            .catch(errors => console.log(errors));
    }


    render() {
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
                <h1 className="trade-mark-reviews">®</h1>
            </div>
        );
    }
};

export default BeachShow;
import React from "react";
import ReviewBox from "../reviews/review_box";
import { Link } from 'react-router-dom';
import ReviewComposeContainer from '../reviews/review_composer_container';
import ReviewsContainer from '../reviews/reviews_container';
import axios from 'axios';
import NavBarContainer from "../nav/navbar_container";

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
       this.props.fetchBeachReviews(this.props.match.params.beach_id);
    }

    componentWillReceiveProps(newState) {
        // this.setState({ reviews: newState.reviews })
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
            // debugger
        }
        return (
            <div>
                <NavBarContainer/>
                <p>This is a beach page, yay! =)</p>
            <ReviewsContainer beach_id={beach_id}/>
            <ReviewComposeContainer beach_id={beach_id}/>
                <br/>
                <br/>
                <br/>
                <p>This is a beach page, yay! =)</p>
                <button className="signup-but"
                    onClick={this.updateWeatherData.bind(this)}
                >CLICK MEEEEE =)</button>
            </div>
        );
    }
};

export default BeachShow;
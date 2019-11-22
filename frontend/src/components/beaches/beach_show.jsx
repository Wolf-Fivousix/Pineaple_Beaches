import React from "react";
import axios from 'axios';

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
        console.log(this.props.beach._id)
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
        return (
            <div>
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
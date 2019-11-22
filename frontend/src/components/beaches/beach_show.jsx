import React from "react";
import axios from 'axios';

class BeachShow extends React.Component {
    componentDidMount() {
        console.log("mounted");
    }
    
    updateWeatherData() {
        console.log("Updating data...");
        axios.get("http://api.openweathermap.org/data/2.5/weather?lat=37.771267&lon=-122.512803&appid=")
            .then(response => console.log(response))
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
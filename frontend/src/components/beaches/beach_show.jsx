import React from "react";
import ReviewBox from "../reviews/review_box";
import { Link } from 'react-router-dom';
import ReviewComposeContainer from '../reviews/review_composer_container';
import ReviewsContainer from '../reviews/reviews_container';

class BeachShow extends React.Component {
    componentDidMount() {
        console.log("mounted");
    }
    
    render() {
        return (
            <div>
                <p>This is a beach page, yay! =)</p>
            <ReviewsContainer/>
            <ReviewComposeContainer beach_id={this.props.params.beach_id}/>
            </div>
        );
    }
};

export default BeachShow;
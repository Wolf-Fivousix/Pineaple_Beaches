import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewBox from './review_box';

class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentWillMount() {
        this.props.fetchBeachReviews();
        this.props.fetchUserReviews();
    }

    componentWillReceiveProps(newState) {
        this.setState( {reviews: newState.reviews });
    }

    render() {
        if(this.state.reviews.length === 0) {
            return (<div>No Reviews at the moment</div>)
        } else {
            return (
                <div>
                    <h2>All Reviews</h2>
                    {this.state.reviews.map(review => (
                        <ReviewBox key={review.id} post={review.post} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(review);
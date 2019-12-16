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
        // debugger
        this.props.fetchBeachReviews(this.props.match.params.beach_id)
        .then(reviews => {
            // debugger
            this.setState({
            reviews: reviews
        })})
    }

    // componentWillReceiveProps(newState) {
    //     debugger
    //     this.setState({ reviews: newState.reviews });
    // }

    componentDidUpdate(prevState) {
        // console.log("hey whats uppppppppp", prevState)
        // debugger
        if (this.props.reviews !== this.state.reviews) {
            this.setState({
                reviews: this.props.reviews
            })
        }
        // this.props.fetchBeachReviews(this.props.beach_id);
    }

    render() {
        // debugger
        if (Object.entries(this.state.reviews).length === 0) {
            return (
                <div className="no-reviews-container">
                    <h1 className="no-r-title">No Reviews at the moment</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="show-reviews-container">
                        <h1 className="all-r-title">All Reviews</h1>
                    </div>
                    <div className="ul-r-container">
                        <ul className="ul-reviews">
                            {Object.keys(this.state.reviews).map(review => (
                                <ReviewBox key={review} post={this.state.reviews[review].post} />
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Review);

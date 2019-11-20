import React from 'react';
import ReviewBox from '../reviews/review_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserReviews(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ reviews: newState.reviews });
    }   
    
    render() {
        if (this.state.reviews.length === 0) {
          return (<div>You currently have no Reviews</div>)
        } else {
          return (
            <div>
              <h2>All of your Reviews</h2>
              {this.state.reviews.map(review => (
                <ReviewBox key={review._id} text={review.text} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;
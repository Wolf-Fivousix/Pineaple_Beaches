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
      // debugger
        if (this.state.reviews.length === 0) {
          return (<div>You currently have no Reviews</div>)
        } else {
          return (
            <div>
              <h2>All of your Reviews</h2>
              {Object.keys(this.state.reviews).map(review => (
                <ReviewBox key={review} post={this.state.reviews[review].post} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;


// {Object.keys(this.state.reviews).map(review => (
//   <ReviewBox key={review} post={this.state.reviews[review].post} />
// ))}

// {this.state.reviews.map(review => (
//   <ReviewBox key={review._id} post={review.post} />
// ))}
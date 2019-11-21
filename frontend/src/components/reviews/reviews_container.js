import { connect } from 'react-redux';
import { fetchBeachReviews, fetchUserReviews } from '../../actions/review_actions';
import Reviews from './reviews';

const mSTP = (state) => {
   
    return {
        // beachReviews: Object.values(state.reviews.beach),
        reviews: Object.values(state.entities.reviews.beach)
    };
};

const mDTP = dispatch => {
    return {
        fetchBeachReviews: () => dispatch(fetchBeachReviews()),
    };
};

export default connect(mSTP,mDTP)(Reviews)
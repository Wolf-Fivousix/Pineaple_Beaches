import { connect } from 'react-redux';
import { fetchBeachReviews, fetchUserReviews } from '../../actions/review_actions';
import Reviews from './reviews';

const mSTP = (state) => {
    return {
        beachReviews: Object.values(state.reviews.beach),
        userReviews: Object.values(state.reviews.user)
    };
};

const mDTP = dispatch => {
    return {
        fetchBeachReviews: () => dispatch(fetchBeachReviews()),
        fetchUserReviews: () => dispatch(fetchUserReviews())
    };
};

export default connect(mSTP,mDTP)(Reviews)
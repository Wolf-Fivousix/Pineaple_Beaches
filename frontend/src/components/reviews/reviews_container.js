import { connect } from 'react-redux';
import { fetchBeachReviews } from '../../actions/review_actions';
import Reviews from './reviews';

const mSTP = (state,ownProps) => {
   console.log(ownProps)
    return ({
        // beachReviews: Object.values(state.reviews.beach),
        // reviews: Object.values(state.entities.reviews.beach),
        reviews: state.entities.reviews,
        beach: ownProps.beach_id
    });
};

const mDTP = dispatch => {
    return {
        fetchBeachReviews: (id) => dispatch(fetchBeachReviews(id)),
    };
};

export default connect(mSTP,mDTP)(Reviews)
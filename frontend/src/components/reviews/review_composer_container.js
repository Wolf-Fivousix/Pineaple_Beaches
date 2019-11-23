import { connect } from 'react-redux';
import { composeReview } from '../../actions/review_actions';
import ReviewCompose from './review_compose';

const mSTP = (state,ownProps) => {
    // console.log(ownProps)
    return ({
        currentUser: state.session.user,
        currentBeach: ownProps.beach_id,
        // currentBeach: state.entities.beaches.id,
        // beach: state.entities.beaches[ownProps.match.params.beach_id],
        newReview: state.entities.reviews.new
    });
};

const mDTP = dispatch => {
    return {
        composeReview: data => dispatch(composeReview(data))
    };
};

export default connect(mSTP,mDTP)(ReviewCompose);
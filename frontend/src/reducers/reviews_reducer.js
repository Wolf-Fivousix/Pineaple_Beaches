import { RECEIVE_BEACH_REVIEWS, RECEIVE_USER_REVIEWS, RECEIVE_NEW_REVIEW } from '../actions/review_actions';

const ReviewsReducer = ( oldState = { beach: {}, user: {}, new: undefined }, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_USER_REVIEWS:
            // newState.user = action.reviews.data;
            // return newState;
            return Object.assign({},action.reviews)
        case RECEIVE_BEACH_REVIEWS:
            return Object.assign({},action.reviews)
            // newState.beach = action.reviews.data;
            // return newState;
        case RECEIVE_NEW_REVIEW:
            // newState.new = action.review.data
            // return newState;
            debugger
            const newRev = {
                [action.review.data._id]: action.review.data
            }
            return Object.assign({}, newState, newRev)
        default:
            return oldState;
    }
};

export default ReviewsReducer;
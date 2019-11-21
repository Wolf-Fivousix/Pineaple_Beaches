import { getBeachReviews, getUserReviews, writeReview } from '../util/review_api_util';

export const RECEIVE_USER_REVIEWS = 'RECEIVE_USER_REVIEWS';
export const RECEIVE_BEACH_REVIEWS = 'RECEIVE_BEACH_REVIEWS';
export const RECEIVE_NEW_REVIEW = 'RECEIVE_NEW_REVIEW';

export const receiveUserReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveBeachReviews = reviews => ({
    type: RECEIVE_BEACH_REVIEWS,
    reviews
})

export const receiveNewReview = review => ({
    type: RECEIVE_NEW_REVIEW,
    review
})


export const fetchBeachReviews = id => dispatch => (
    getBeachReviews(id)
        .then(reviews => dispatch(receiveBeachReviews(reviews)))
        .catch(error => console.log(error))
)

export const fetchUserReviews = id => dispatch => (
    getUserReviews(id)
        .then(reviews => dispatch(receiveUserReviews(reviews)))
        .catch(error => console.log(error))
)

export const composeReview = data => dispatch => (
    writeReview(data)
        .then(review => dispatch(receiveNewReview(review)))
        .catch(error => console.log(error))
)
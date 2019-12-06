import { getBeachReviews, getUserReviews, writeReview } from '../util/review_api_util';

export const RECEIVE_USER_REVIEWS = 'RECEIVE_USER_REVIEWS';
export const RECEIVE_BEACH_REVIEWS = 'RECEIVE_BEACH_REVIEWS';
export const RECEIVE_NEW_REVIEW = 'RECEIVE_NEW_REVIEW';

export const receiveUserReviews = reviews => ({
    type: RECEIVE_USER_REVIEWS,
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
        .then(reviews =>
                {
                    const ids = reviews.data.map(review => review._id)
                    const revs = {}
                    for (let i = 0; i < ids.length; i++) {
                        revs[ids[i]] = reviews.data[i]
                    }
                    dispatch(receiveBeachReviews(revs))
                    return revs

                }

                
            )
        .catch(error => console.log(error))
)

export const fetchUserReviews = id => dispatch => (
    getUserReviews(id)
        .then(reviews => {
                 const ids = reviews.data.map(review => review._id)
                 const revs = {}
                 for (let i = 0; i < ids.length; i++) {
                     revs[ids[i]] = reviews.data[i]
                }
                 return dispatch(receiveUserReviews(revs))
            })
        .catch(error => console.log(error))
)

export const composeReview = data => dispatch => {
    // debugger
    return(
    writeReview(data)
        .then(review => dispatch(receiveNewReview(review)))
        .catch(error => console.log(error))
)}

// (reviews => {
//     const ids = reviews.data.map(review => review._id)
//     const revs = {}
//     for (let i = 0; i < ids.length; i++) {
//         revs[ids[i]] = reviews.data[i]
//     }
//     return dispatch(receiveUserReviews(revs))
// })

// reviews => dispatch(receiveUserReviews(reviews)))
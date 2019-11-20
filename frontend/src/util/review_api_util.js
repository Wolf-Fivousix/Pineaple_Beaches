import axios from 'axios';
import { receiveBeachReviews } from '../actions/review_actions';

export const getUserReviews = id => {
    return axios.get(`/api/reviews/user/${id}`)
}
export const getBeachReviews = id => {
    return axios.get(`/api/reviews/beach/${id}`)
}

export const writeReview = data => {
    return axios.post('/api/reviews/',data)
}



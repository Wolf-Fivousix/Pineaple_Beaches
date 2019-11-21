import axios from 'axios';

export const getUserReviews = id => {
    return axios.get(`/api/reviews/user/${id}`)
}
export const getBeachReviews = id => {
    return axios.get(`/api/reviews/beach/${id}`)
}

export const writeReview = data => {
    return axios.post('/api/reviews/',data)
}



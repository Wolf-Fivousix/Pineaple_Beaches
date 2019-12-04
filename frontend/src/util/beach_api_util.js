import axios from 'axios';

export const fetchAllBeaches = () => (
    axios.get("/api/beaches")
);

export const fetchTest = () => (
    axios.get("/api/beaches/test")
);

export const fetchBeachById = (beachId) => (
    axios.get(`/api/beaches/${beachId}`)
);

export const updateBeachTemperature = (payload) => (
    axios.patch(`/api/beaches/${payload._id}`, {
        temperature: payload.temperature,
        date: payload.date
    })
);
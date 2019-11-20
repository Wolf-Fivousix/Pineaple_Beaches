import axios from 'axios';

export const fetchAllBeaches = () => (
    axios.get("/api/beaches")
);

export const fetchTest = () => (
    axios.get("/api/beaches/test")
);
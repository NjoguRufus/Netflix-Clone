import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY
    }
});

// Add request interceptor for debugging
instance.interceptors.request.use(config => {
    console.log('Request URL:', config.url);
    console.log('Request Params:', config.params);
    return config;
}, error => {
    return Promise.reject(error);
});

// Add response interceptor for error handling
instance.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error.response?.data);
        return Promise.reject(error);
    }
);

export default instance;
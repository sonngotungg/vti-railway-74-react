// api.js
import axios from 'axios';

const API_URL = 'https://7c58-240b-251-93c1-bb00-14a6-44f2-d9a-cc75.ngrok-free.app/api/v1';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if a token exists and add it to the Authorization header
    const token = localStorage.getItem('access-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
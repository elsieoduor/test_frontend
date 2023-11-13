// apiService.js
import axios from 'axios';

const baseURL = 'http://your-django-backend-url/api'; // Replace with your actual Django API URL

const api = axios.create({
  baseURL,
});

export default api;

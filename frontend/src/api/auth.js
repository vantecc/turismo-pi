import axios from 'axios';

const API_BASE_URL = 'http://10.19.14.109:8000/api/'; // ← seu IP local

const api = axios.create({
  baseURL: API_BASE_URL,
  
});

export default api;

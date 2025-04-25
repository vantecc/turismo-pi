import axios from 'axios';

const API_BASE_URL = 'http://10.19.14.109:8000/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Função de cadastro
export async function registerUser({ name, email, password }) {
  const response = await api.post('register/', {
    username: name,
    email:email,
    password:password
  });

  return response.data;
}

export default api;

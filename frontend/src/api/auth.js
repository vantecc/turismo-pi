import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.104:8000'; // ← seu IP local

 // ou o IP da sua máquina se estiver testando no celular

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || 'Erro ao cadastrar';
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || 'Erro ao fazer login';
  }
};

// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api'; // Replace with your backend URL

// Example API calls
export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/users`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
  return response.data;
};

// Add other APIs as needed

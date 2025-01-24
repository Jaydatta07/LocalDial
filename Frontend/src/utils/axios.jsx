import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000", // Your backend's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for authentication tokens
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

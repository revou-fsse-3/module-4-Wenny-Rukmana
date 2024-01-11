import axios from "axios";

const api = axios.create({
  baseURL: "https://mock-api.arikmpt.com/api",
});

api.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhNTA2YWE1LWU3MGEtNDhjYy05N2M5LWQ1MjdiNWVkZTgxMCIsImlhdCI6MTcwNDk2OTU4MCwiZXhwIjoxNzA0OTkxMTgwfQ.JqAyHl-qxlfGi_BUUJnSRXgcuONJx8DUjSbxQYVVXo0";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

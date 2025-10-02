import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json" },
});

// Interceptor
api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer fake-token";
  return config;
});

export default api;

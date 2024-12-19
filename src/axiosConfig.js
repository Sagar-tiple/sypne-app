import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Base URL for backend
});

export default axiosInstance;

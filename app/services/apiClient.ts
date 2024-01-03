import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
});

const apiClientSecure = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

export { apiClient, apiClientSecure };

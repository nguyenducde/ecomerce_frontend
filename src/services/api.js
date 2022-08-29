import axios from "axios";
import { API_URL } from "../config";

const http = axios.create({
  baseURL: API_URL,
});

http.defaults.headers.post["Content-Type"] = "application/json";

http.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

http.interceptors.request.use(
  async (response) => {
    if (response.status > 200 && response.status < 300) {
      let data = response.data;
      if (data && data.user && data.user.role) {
        if (data.user.role !== "user") {
          localStorage.removeItem("accessToken");
          return Promise.reject({
            status: false,
            message: "User doesn't have permission to access.",
          });
        }
      }
      return Promise.resolve(response.data);
    }
  },
  async (error) => {
    if (error && error.message === "Network Error") {
      console.error(error.message);
    }

    const { response, request } = error;

    if (response) {
      if (response.status === 401) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
      if (response.status >= 400 && response.status < 500) {
        return Promise.reject(response.data);
      } else if (request) {
        return null;
      }
      return Promise.reject(error);
    }
  }
);
export default http;

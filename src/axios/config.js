import axios from "axios";
import { URL } from "@/axios/ApiBaseURL";

const API = axios.create({
    baseURL: URL.localurl,
    timeout: 5000
});

API.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('tokenAuth'); // Assuming you store the token in localStorage

      if (token) {
        API.get("authentication")
        .then(() => {
          config.headers.Authorization = `Bearer ${token}`;
        })
        .catch(() => {
          return
        })
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export { API as axios }
import axios from "axios";
export const instance = axios.create({
  baseURL: "https://api.tvmaze.com",
  timeout: 10000,
});

export default instance;

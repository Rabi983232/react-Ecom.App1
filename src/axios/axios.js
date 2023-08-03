import axios from "axios";

const BASE_URL = "https://api.creativeswag.in:3007/api/v1/";
// const BASE_URL = "http://localhost:3007/api/v1/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
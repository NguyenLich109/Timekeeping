import axios from "axios";

const http = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://api-timekeeping.vercel.app/api",
});

export default http;

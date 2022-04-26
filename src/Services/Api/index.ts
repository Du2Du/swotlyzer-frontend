import axios from "axios";

// const baseURL = "https://swotlyzer.herokuapp.com/api";
const baseURL = "http://localhost:8080/api"
export const Backend = axios.create({
  withCredentials: true,
  baseURL,
});

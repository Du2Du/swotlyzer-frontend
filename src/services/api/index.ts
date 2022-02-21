import axios from "axios";

const baseURL = "https://swotlyzer.herokuapp.com/api";

export const Backend = axios.create({
  withCredentials: true,
  baseURL,
});

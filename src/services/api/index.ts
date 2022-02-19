import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const baseURL = "https://swotlyzer.herokuapp.com/api";
const fetcher = (url: string) =>
  Backend.get(url).then((res) => {
    res.data;
  });

export const Backend = axios.create({
  withCredentials: true,
  baseURL,
});

export const useGet = (url: string) => {
  const { data, error, mutate, isValidating } = useSWR(baseURL + url, fetcher);
  return { data, error, mutate, isValidating };
};

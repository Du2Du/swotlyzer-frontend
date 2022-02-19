import axios from "axios";
import useSWR from "swr";

const baseURL = "https://swotlyzer.herokuapp.com/api";
const fetcher = (url: string) => Backend.get(url).then((res) => res.data);

export const Backend = axios.create({
  withCredentials: true,
  baseURL,
});

export const useGet = <T>(url: string) => {
  const { data, error, mutate, isValidating } = useSWR<T>(
    baseURL + url,
    fetcher
  );
  return { data, error, mutate, isValidating };
};

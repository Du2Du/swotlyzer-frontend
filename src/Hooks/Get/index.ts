import useSWR from "swr";
import { Backend } from "../../Services/Api";

const fetcher = (url: string) => Backend.get(url).then((res) => res.data);

const baseURL = "https://swotlyzer.herokuapp.com/api";

export const useGet = <T>(url: string) => {
  const { data, error, mutate, isValidating } = useSWR<T>(
    baseURL + url,
    fetcher
  );
  return { data, error, mutate, isValidating };
};

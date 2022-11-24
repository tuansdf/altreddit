import { useLocation } from "react-router-dom";
import useSWR from "swr";

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);
  return res.json();
};

export default function useCommon() {
  const location = useLocation();

  const { data, error } = useSWR(
    "https://www.reddit.com" + location.pathname + ".json" + location.search,
    fetcher
  );

  return { data, isError: !!error, isLoading: !error && !data };
}

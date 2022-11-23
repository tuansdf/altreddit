import useSWR from "swr";

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);
  return res.json();
};

export default function useCommon() {
  const { data, error } = useSWR(
    "https://www.reddit.com" +
      window.location.pathname +
      ".json" +
      window.location.search,
    fetcher
  );

  return { data, isError: !!error, isLoading: !error && !data };
}

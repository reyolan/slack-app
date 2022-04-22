import useSWR from "swr";
import API from "services/api";
import { useContext } from "react";
import { AuthContext } from "context/auth-context";

const swrFetcher = (url, config) =>
  API.get(url, config).then(res => {
    const {
      data: { data },
    } = res;

    return data;
  });

function useGetRequest(relativeUrl) {
  const { loginHeaders } = useContext(AuthContext);
  const { data, error } = useSWR([relativeUrl, loginHeaders], swrFetcher, {
    refreshInterval: 1000,
  });

  return [data, !error && !data, error];
}

export default useGetRequest;

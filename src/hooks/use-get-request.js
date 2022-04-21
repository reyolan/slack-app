import { useContext } from "react";
import API from "services/api";
import { AuthContext } from "context/auth-context";
import useSWR from "swr";

const fetcher = (url, config) =>
  API.get(url, config).then(res => {
    const {
      data: { data },
    } = res;

    return data;
  });

function useGetRequest(relativeUrl) {
  const { loginHeaders } = useContext(AuthContext);
  const { data, error } = useSWR([relativeUrl, loginHeaders], fetcher, {
    refreshInterval: 1000,
  });

  return [data, !error && !data, error];
}

export default useGetRequest;

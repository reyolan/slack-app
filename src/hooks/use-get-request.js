import useSWR from "swr";
import { swrFetcher } from "services/api";
import { useContext } from "react";
import { AuthContext } from "context/auth-context";

function useGetRequest(relativeUrl) {
  const { loginHeaders } = useContext(AuthContext);
  const { data, error } = useSWR([relativeUrl, loginHeaders], swrFetcher, {
    refreshInterval: 1000,
  });

  return [data, !error && !data, error];
}

export default useGetRequest;

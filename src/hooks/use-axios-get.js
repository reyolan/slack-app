import { useState, useEffect, useContext } from "react";
import { AuthContext } from "context/auth-context";
import API from "services/api";

function useAxiosGet(
  relativeUrl,
  refetchTimeInterval,
  refetchDependency = null
) {
  const { loginHeaders } = useContext(AuthContext);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getRequest = () => {
    API.get(relativeUrl, loginHeaders)
      .then(res => {
        const {
          data: { data },
        } = res;
        setResponse(data);
      })
      .catch(err => {
        setError(err);
        throw new Error(err);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getRequest();
  }, [relativeUrl]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchInterval = setInterval(getRequest, refetchTimeInterval);

    return () => {
      clearInterval(fetchInterval);
      controller.abort();
    };
  }, [refetchDependency]);

  return [response, error, isLoading, getRequest];
}

export default useAxiosGet;

import { useState, useEffect } from "react";
import API from "services/api";

function useAxiosGet(relativeUrl, config = null, dependency = null) {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getRequest = () => {
    if (!isLoading) {
      setIsLoading(true);
    }
    API.get(relativeUrl, config)
      .then(res => {
        setResponse(res);
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getRequest();
  }, [dependency]);

  return [response, error, isLoading, getRequest];
}

export default useAxiosGet;

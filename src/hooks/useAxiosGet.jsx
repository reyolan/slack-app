import { useState, useEffect } from "react";
import API from "services/api";

function useAxiosGet(relativeUrl, config = null, ...dependencies) {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    API.get(relativeUrl, config)
      .then(res => {
        setResponse(res);
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [...dependencies]);

  return [response, error, isLoading];
}

export default useAxiosGet;

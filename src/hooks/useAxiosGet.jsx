import { useState, useEffect } from "react";
import API from "services/api";

function useAxiosGet(relativeUrl, config = null) {
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
  }, []);

  return { response, error, isLoading };
}

export default useAxiosGet;

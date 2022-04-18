import { useState, useEffect } from "react";
import API from "services/api";

function useAxiosGet(relativeUrl, config = null) {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //make this an async function?

  const getRequest = () => {
    API.get(relativeUrl, config)
      .then(res => {
        const {
          data: { data },
        } = res;
        setResponse(data);
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getRequest();
  }, [relativeUrl]);

  return [response, error, isLoading, getRequest];
}

export default useAxiosGet;

import { useState, useEffect } from "react";
import API from "services/api";

function useAxiosGet(relativeUrl, config = {}) {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //make this an async function?
  const getRequest = (relativeUrl, config) => {
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
    const getRequest = (relativeUrl, config) => {
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
    getRequest(relativeUrl, config);
  }, [relativeUrl]);

  //add na lang tayo dto ng setInterval para hindi na tayo maguseEffect sa mga components

  return [response, error, isLoading, getRequest];
}

export default useAxiosGet;

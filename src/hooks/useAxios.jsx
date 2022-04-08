import { useState, useEffect } from "react";
import API from "services/api";

function useAxios(relativeUrl) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await API.get(relativeUrl);
        setResponse(response);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { response, error, isLoading };
}

export default useAxios;

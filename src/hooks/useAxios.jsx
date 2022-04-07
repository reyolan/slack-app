import { useState, useEffect } from "react";
import API from "services/api";

function useAxios(relativeUrl, data, method = "GET") {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (method === "GET") {
          const response = await API.get(relativeUrl);
          setResponse(response);
        }

        if (method === "POST") {
          const response = await API.post(relativeUrl, data);
          console.log(response);
        }
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

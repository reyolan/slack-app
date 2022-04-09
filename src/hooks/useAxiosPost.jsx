import { useState } from "react";
import API from "services/api";

function useAxiosPost() {
  const [isLoading, setIsLoading] = useState(false);

  async function postRequest(relativeUrl, data, config = null) {
    const resolved = { response: null, error: null };
    try {
      setIsLoading(true);
      const res = await API.post(relativeUrl, data, config);
      resolved.response = res;
    } catch (error) {
      resolved.error = error;
    } finally {
      setIsLoading(false);
    }

    return resolved;
  }

  return { isLoading, postRequest };
}
export default useAxiosPost;

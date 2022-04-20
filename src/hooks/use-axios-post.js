import { useState } from "react";
import API from "services/api";

function useAxiosPost() {
  const [isPosting, setIsPosting] = useState(false);

  async function postRequest(relativeUrl, data, config = null) {
    const resolved = { response: null, error: null };
    try {
      setIsPosting(true);
      const res = await API.post(relativeUrl, data, config);
      resolved.response = res;
    } catch (error) {
      resolved.error = error;
    } finally {
      setIsPosting(false);
    }

    return resolved;
  }

  return { isPosting, postRequest };
}
export default useAxiosPost;

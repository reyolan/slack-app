import { useState, useContext } from "react";
import { AuthContext } from "context/auth-context";
import API from "services/api";

function useAxiosPost(relativeUrl) {
  const { loginHeaders } = useContext(AuthContext);
  const [isPosting, setIsPosting] = useState(false);

  async function postRequest(data, config = loginHeaders) {
    if (Object.keys(config).length === 0) {
      config = {};
    }

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

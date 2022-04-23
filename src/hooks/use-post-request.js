import { useContext } from "react";
import { AuthContext } from "context/auth-context";
import { API } from "services/api";

function usePostRequest(relativeUrl) {
  const { loginHeaders } = useContext(AuthContext);

  async function postRequest(data, config = loginHeaders) {
    if (Object.keys(config).length === 0) {
      config = {};
    }

    const resolved = { response: null, error: null };
    try {
      const res = await API.post(relativeUrl, data, config);
      resolved.response = res;
    } catch (error) {
      resolved.error = error;
    }

    return resolved;
  }

  return postRequest;
}
export default usePostRequest;

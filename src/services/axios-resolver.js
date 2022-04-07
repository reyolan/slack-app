import API from "./api";

async function resolveAxios(relativeUrl, method = "GET", data) {
  const resolved = { response: null, error: null };

  try {
    if (method === "GET") {
      const res = await API.get(relativeUrl);
      resolved.response = res;
    }

    if (method === "POST") {
      const res = await API.post(relativeUrl, data);
      resolved.response = res;
    }
  } catch (error) {
    resolved.error = error;
  }

  return resolved;
}

export default resolveAxios;

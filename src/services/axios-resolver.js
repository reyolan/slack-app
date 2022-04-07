import API from "./api";

async function resolveAxios(relativeUrl, data = null) {
  const resolved = { response: null, error: null };

  try {
    if (!data) {
      const res = await API.get(relativeUrl);
      resolved.response = res;
    }

    if (data) {
      const res = await API.post(relativeUrl, data);
      resolved.response = res;
    }
  } catch (error) {
    resolved.error = error;
  }

  return resolved;
}

export default resolveAxios;

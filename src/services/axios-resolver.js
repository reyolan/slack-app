import API from "./api";

async function getRequest(relativeUrl, config = null) {
  const resolved = { response: null, error: null };

  try {
    const res = await API.get(relativeUrl, config);
    resolved.response = res;
  } catch (error) {
    resolved.error = error;
  }

  return resolved;
}

async function postRequest(relativeUrl, data, config = null) {
  const resolved = { response: null, error: null };

  try {
    const res = await API.post(relativeUrl, data, config);
    resolved.response = res;
  } catch (error) {
    resolved.error = error;
  }

  return resolved;
}

export { getRequest, postRequest };

const BASE_URL = "https://slackapi.avionschool.com";

const RELATIVE_URL = Object.freeze({
  registerUser: `${BASE_URL}/register`,
  sendMessage: `${BASE_URL}/api/v1/messages`,
  createChannel: `${BASE_URL}/api/v1/channels`,
  getChannelUsers: `${BASE_URL}/api/v1/channels`,
  addMember: `${BASE_URL}/api/v1/channel/add_member`,
  getAllUsers: `${BASE_URL}/api/v1/users`,
  getChannelDetails: id => `${BASE_URL}/api/v1/channels/${id}`,
  retrieveMessage: (id, receiver) =>
    `${BASE_URL}/api/v1/messages?receiver_id=${id}&receiver_class=${receiver}`,
});

function fetchOptions(method, responseHeader = null, data = null) {
  const options = { method };

  if (Object.keys(responseHeader).length) {
    const { accessToken, client, expiry, uid } = responseHeader;
    options.headers = {
      "access-token": accessToken,
      client,
      expiry,
      uid,
    };
  }

  if (method === "POST" && data) {
    options.body = JSON.stringify(data);
  }

  return options;
}

export { RELATIVE_URL, fetchOptions };

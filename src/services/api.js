import axios from "axios";

export default axios.create({
  baseURL: "http://206.189.91.54/api/v1",
});

//Relative URLs

function messageApi(id, receiver) {
  return `messages?receiver_id=${id}&receiver_class=${receiver}`;
}

function channelDetailsApi(channelId) {
  return `channels/${channelId}`;
}

const CHANNEL_LIST_API = "channels";
const ALL_USERS_API = "users";
const ADD_MEMBER_API = "channel/add_member";
const SEND_MESSAGE_API = "messages";
const SIGN_IN_API = "auth/sign_in";
const REGISTER_API = "auth";

export {
  messageApi,
  channelDetailsApi,
  CHANNEL_LIST_API,
  ALL_USERS_API,
  ADD_MEMBER_API,
  SEND_MESSAGE_API,
  SIGN_IN_API,
  REGISTER_API,
};

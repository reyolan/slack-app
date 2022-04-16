import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import useAxiosGet from "hooks/useAxiosGet";
import styles from "./channel.module.css";
import ChannelSideBar from "components/channel/channel-sidebar";
import MessageArea from "components/channel/message-area";
import LoadingContainer from "components/ui/containers/loading-container";
import { getEmailUsername } from "utils/helpers";

function Channel() {
  const { loggedInId, loginHeaders } = useContext(AuthContext);
  const [channelDetails, setChannelDetails] = useState({});
  const [usernames, setUsernames] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const { channelId } = useParams();
  const [
    channelResponse,
    channelError,
    isChannelLoading,
    refetchChannelDetails,
  ] = useAxiosGet(`channels/${channelId}`, loginHeaders, channelId);
  const [allUsersResponse, allUsersError, isAllUsersLoading, refetchUsers] =
    useAxiosGet("users", loginHeaders, channelId);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      refetchChannelDetails();
      console.log(channelResponse);
    }, 2000);

    if (channelResponse) {
      setChannelDetails(channelResponse.data.data);
    }

    return () => {
      clearInterval(fetchInterval);
    };
  }, [channelResponse]);

  useEffect(() => {
    if (allUsersResponse) {
      const allUsers = allUsersResponse.data.data.map(user => ({
        ...user,
        uid: getEmailUsername(user.uid),
      }));
      setAllUsers(allUsers);
    }
    //sabay dapat ung channel details pati allusersResponse
    //put both in the same setinterval (refetchAllUsers and refetchChannelDetails para walang conflict sa data)
    //para if may new user sa channel, makikita agad name sa don sa all users
  }, [allUsersResponse]);

  useEffect(() => {
    if (allUsers && channelDetails) {
      const usernames = allUsers.filter(user =>
        channelDetails.channel_members.some(
          member => member.user_id === user.id
        )
      );
      setUsernames(usernames);
    }
  }, [allUsers, channelDetails]);

  useEffect(() => {
    if (channelDetails.owner_id === +loggedInId) {
      setIsOwner(true);
    }
  }, [channelDetails, loggedInId]);

  return (
    <>
      <ChannelSideBar
        channelName={channelDetails.name}
        isOwner={isOwner}
        channelId={channelDetails.id}
        ownerId={channelDetails.owner_id}
        channelUsers={usernames}
        allUsers={allUsers}
        channelDetails={channelDetails}
        refetchChannelDetails={refetchChannelDetails}
      />

      <MessageArea
        id={channelId}
        receiver="Channel"
        name={channelDetails.name}
      />
    </>
  );
}

export default Channel;

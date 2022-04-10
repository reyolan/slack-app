import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import useAxiosGet from "hooks/useAxiosGet";
import styles from "./channel.module.css";
import ChannelSideBar from "components/channel/channel-sidebar";
import MessageContainer from "components/channel/message-container";
import ColumnContainer from "components/ui/containers/column-container";
import MessageField from "components/channel/message-field";
import LoadingContainer from "components/ui/containers/loading-container";

function Channel() {
  const { loggedInId, loginHeaders } = useContext(AuthContext);
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState({});
  const [usernames, setUsernames] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [channelResponse, channelError, isChannelLoading] = useAxiosGet(
    `channels/${channelId}`,
    loginHeaders,
    channelId
  );
  const [allUsersResponse, allUsersError, isAllUsersLoading] = useAxiosGet(
    "users",
    loginHeaders,
    channelId
  );

  useEffect(() => {
    if (allUsersResponse && channelDetails) {
      const usernames = allUsersResponse.data.data.filter(user =>
        channelDetails.channel_members.some(
          member => member.user_id === user.id
        )
      );
      setUsernames(usernames);
      console.log(usernames);
    }
  }, [allUsersResponse, channelDetails]);

  useEffect(() => {
    if (channelResponse) {
      setChannelDetails(channelResponse.data.data);
    }
  }, [channelResponse]);

  useEffect(() => {
    if (allUsersResponse) {
      setAllUsers(allUsersResponse.data.data);
    }
  }, [allUsersResponse]);

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
        channelMembers={channelDetails.channel_members}
        ownerId={channelDetails.owner_id}
        users={usernames}
        allUsers={allUsers}
      />
      <ColumnContainer className={styles.messagesContainer}>
        <MessageContainer />
        <MessageField />
      </ColumnContainer>
    </>
  );
}

export default Channel;

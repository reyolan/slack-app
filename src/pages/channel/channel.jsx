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
import { getEmailUsername } from "utils/helpers";

function Channel() {
  const { loggedInId, loginHeaders } = useContext(AuthContext);
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState({});
  const [usernames, setUsernames] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [reFetchUsers, setRefetchUsers] = useState(false);
  const [channelResponse, channelError, isChannelLoading] = useAxiosGet(
    `channels/${channelId}`,
    loginHeaders,
    channelId,
    reFetchUsers
  );
  const [allUsersResponse, allUsersError, isAllUsersLoading] = useAxiosGet(
    "users",
    loginHeaders,
    channelId,
    reFetchUsers
  );

  useEffect(() => {
    if (channelResponse) {
      setChannelDetails(channelResponse.data.data);
      console.log(channelResponse);
    }
  }, [channelResponse]);

  useEffect(() => {
    if (allUsersResponse) {
      const allUsers = allUsersResponse.data.data.map(user => ({
        ...user,
        uid: getEmailUsername(user.uid),
      }));
      setAllUsers(allUsers);
    }
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
  }, [allUsers]);

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
        setRefetchUsers={setRefetchUsers}
      />
      <ColumnContainer className={styles.messagesContainer}>
        <MessageContainer />
        <MessageField />
      </ColumnContainer>
    </>
  );
}

export default Channel;

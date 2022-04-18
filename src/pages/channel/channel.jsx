import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import useAxiosGet from "hooks/useAxiosGet";
import ChannelSideBar from "components/channel/channel-sidebar";
import MessageArea from "components/message-area";

function Channel() {
  const { loggedInId, loginHeaders } = useContext(AuthContext);
  const { allUsers, isAllUsersLoading } = useContext(DataContext);
  const [channelUsers, setChannelUsers] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const { channelId } = useParams();
  const [
    channelResponse,
    channelError,
    isChannelLoading,
    refetchChannelDetails,
  ] = useAxiosGet(`channels/${channelId}`, loginHeaders);

  useEffect(() => {
    const controller = new AbortController();
    const fetchInterval = setInterval(refetchChannelDetails, 1000);

    return () => {
      clearInterval(fetchInterval);
      controller.abort();
    };
  }, [channelId]);

  useEffect(() => {
    if (allUsers && channelResponse) {
      const channelUsers = allUsers.filter(
        user =>
          channelResponse.channel_members.some(
            member => member.user_id === user.id
          ) && user.id !== channelResponse.owner_id
      );
      setChannelUsers(channelUsers);
    }
  }, [allUsers, channelResponse]);

  useEffect(() => {
    if (channelResponse.owner_id === +loggedInId) {
      setIsOwner(true);
      return;
    }
    setIsOwner(false);
  }, [loggedInId, channelResponse]);

  return (
    <>
      <ChannelSideBar
        channelName={channelResponse.name}
        isOwner={isOwner}
        channelId={channelResponse.id}
        ownerId={channelResponse.owner_id}
        channelMembers={channelUsers}
        allUsers={allUsers}
        refetchChannelDetails={refetchChannelDetails}
        isLoading={!(isAllUsersLoading || isChannelLoading)}
      />

      <MessageArea
        id={channelId}
        receiver="Channel"
        name={channelResponse.name}
        isLoading={!(isAllUsersLoading || isChannelLoading)}
      />
    </>
  );
}

export default Channel;

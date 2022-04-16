import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import useAxiosGet from "hooks/useAxiosGet";
import ChannelSideBar from "components/channel/channel-sidebar";
import MessageArea from "components/channel/message-area";
import LoadingContainer from "components/ui/containers/loading-container";

function Channel() {
  const { loggedInId, loginHeaders } = useContext(AuthContext);
  const { allUsers, isAllUsersLoading } = useContext(DataContext);
  const [usernames, setUsernames] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const { channelId } = useParams();
  const [
    channelResponse,
    channelError,
    isChannelLoading,
    refetchChannelDetails,
  ] = useAxiosGet(`channels/${channelId}`, loginHeaders, channelId);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      refetchChannelDetails();
      console.log(channelResponse);
    }, 2000);

    return () => {
      clearInterval(fetchInterval);
    };
  }, [channelResponse]);

  useEffect(() => {
    if (allUsers && channelResponse) {
      const usernames = allUsers.filter(user =>
        channelResponse.channel_members.some(
          member => member.user_id === user.id
        )
      );
      setUsernames(usernames);
    }
  }, [allUsers, channelResponse]);

  useEffect(() => {
    if (channelResponse.owner_id === +loggedInId) {
      setIsOwner(true);
    }
  }, [channelResponse, loggedInId]);

  return (
    <>
      {/* implement NAND operator here */}
      {!(isAllUsersLoading && isChannelLoading) ? (
        <>
          <ChannelSideBar
            channelName={channelResponse.name}
            isOwner={isOwner}
            channelId={channelResponse.id}
            ownerId={channelResponse.owner_id}
            channelUsers={usernames}
            allUsers={allUsers}
            channelDetails={channelResponse}
            refetchChannelDetails={refetchChannelDetails}
          />

          <MessageArea
            id={channelId}
            receiver="Channel"
            name={channelResponse.name}
          />
        </>
      ) : (
        <LoadingContainer />
      )}
    </>
  );
}

export default Channel;

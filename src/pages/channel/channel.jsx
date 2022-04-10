import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import styles from "./channel.module.css";
import ChannelSideBar from "components/channel/channel-sidebar";
import MessageContainer from "components/channel/message-container";
import ColumnContainer from "components/ui/containers/column-container";
import MessageField from "components/channel/message-field";

function Channel() {
  const { loggedInId } = useContext(AuthContext);
  const { channels } = useContext(DataContext);
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState({});
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    setChannelDetails(channels.find(channel => channel.id === +channelId));

    //now think of a way to know who is the ownerId to hide the add member button
  }, [channelId, channels]);

  useEffect(() => {
    if (channelDetails.owner_id === +loggedInId) {
      setIsOwner(true);
    }
  }, [channelDetails, loggedInId]);

  return (
    <>
      <ChannelSideBar channelName={channelDetails.name} isOwner={isOwner} />
      <ColumnContainer className={styles.messagesContainer}>
        <MessageContainer />
        <MessageField />
      </ColumnContainer>
    </>
  );
}

export default Channel;

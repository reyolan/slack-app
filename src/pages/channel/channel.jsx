import styles from "./channel.module.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "context/data-context";
import useGetRequest from "hooks/use-get-request";
import ChannelSideBar from "components/channel/channel-sidebar";
import MessageArea from "components/message-area";
import LoadingContainer from "components/ui/containers/loading-container";

function Channel() {
  const { isAllUsersLoading } = useContext(DataContext);
  const { channelId } = useParams();
  const [channelResponse, isChannelLoading, channelError] = useGetRequest(
    `channels/${channelId}`
  );

  return (
    <>
      {!isChannelLoading ? (
        <ChannelSideBar channelResponse={channelResponse} />
      ) : (
        <LoadingContainer className={styles.loadingChannel} />
      )}
      <MessageArea
        id={channelId}
        receiver="Channel"
        name={channelResponse?.name}
      />
    </>
  );
}

export default Channel;

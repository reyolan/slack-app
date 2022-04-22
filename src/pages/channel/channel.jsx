import styles from "./channel.module.css";
import { useParams } from "react-router-dom";
import useGetRequest from "hooks/use-get-request";
import ChannelSideBar from "components/channel/channel-sidebar";
import MessageArea from "components/message-area";
import LoadingContainer from "components/ui/containers/loading-container";

function Channel() {
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

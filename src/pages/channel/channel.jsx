import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "context/data-context";
import useAxiosGet from "hooks/use-axios-get";
import ChannelSideBar from "components/channel/channel-sidebar";
import MessageArea from "components/message-area";

function Channel() {
  const { isAllUsersLoading } = useContext(DataContext);
  const { channelId } = useParams();
  const [
    channelResponse,
    channelError,
    isChannelLoading,
    refetchChannelDetails,
  ] = useAxiosGet(`channels/${channelId}`, 1000, channelId);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const fetchInterval = setInterval(refetchChannelDetails, 1000);

  //   return () => {
  //     clearInterval(fetchInterval);
  //     controller.abort();
  //   };
  // }, [channelId]);

  return (
    <>
      <ChannelSideBar
        channelResponse={channelResponse}
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

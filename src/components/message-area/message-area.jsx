import { useEffect } from "react";
import styles from "./message-area.module.css";
import MessageContainer from "components/message-area/message-container";
import MessageField from "./message-field";
import ColumnContainer from "components/ui/containers/column-container";
import useAxiosGet from "hooks/use-axios-get";
import LoadingContainer from "components/ui/containers/loading-container";

function MessageArea({ id, receiver, name, isLoading, isChannel = false }) {
  const [messagesResponse, messagesError, isMessagesLoading, refetchMessages] =
    useAxiosGet(`messages?receiver_id=${id}&receiver_class=${receiver}`);

  useEffect(() => {
    const controller = new AbortController();
    const fetchInterval = setInterval(refetchMessages, 1000);

    return () => {
      clearInterval(fetchInterval);
      controller.abort();
    };
  }, [id]);

  return (
    <>
      {!(isMessagesLoading && isLoading) ? (
        <ColumnContainer className={styles.messagesContainer}>
          <MessageContainer
            messagesResponse={messagesResponse}
            name={name}
            isChannel={isChannel}
          />
          <MessageField
            id={id}
            receiver={receiver}
            name={name}
            refetchMessages={refetchMessages}
          />
        </ColumnContainer>
      ) : (
        <LoadingContainer />
      )}
    </>
  );
}

export default MessageArea;

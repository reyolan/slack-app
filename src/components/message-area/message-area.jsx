import styles from "./message-area.module.css";
import MessageContainer from "components/message-area/message-container";
import MessageField from "./message-field";
import ColumnContainer from "components/ui/containers/column-container";
import useAxiosGet from "hooks/use-axios-get";
import LoadingContainer from "components/ui/containers/loading-container";

function MessageArea({ id, receiver, name, isLoading }) {
  const [messagesResponse, messagesError, isMessagesLoading, refetchMessages] =
    useAxiosGet(
      `messages?receiver_id=${id}&receiver_class=${receiver}`,
      1000,
      id
    );

  return (
    <>
      {!(isMessagesLoading && isLoading) ? (
        <ColumnContainer className={styles.messagesContainer}>
          <MessageContainer
            messagesResponse={messagesResponse}
            name={name}
            receiver={receiver}
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

import styles from "./message-area.module.css";
import MessageContainer from "components/message-area/message-container";
import MessageField from "./message-field";
import ColumnContainer from "components/ui/containers/column-container";
import LoadingContainer from "components/ui/containers/loading-container";
import useGetRequest from "hooks/use-get-request";
import { messageApi } from "services/api";

function MessageArea({ id, receiver, name }) {
  const [messagesResponse, isMessagesLoading] = useGetRequest(
    messageApi(id, receiver)
  );

  return (
    <>
      {!isMessagesLoading ? (
        <ColumnContainer className={styles.messagesContainer}>
          <MessageContainer
            messagesResponse={messagesResponse}
            name={name}
            receiver={receiver}
          />
          <MessageField id={id} receiver={receiver} name={name} />
        </ColumnContainer>
      ) : (
        <LoadingContainer />
      )}
    </>
  );
}

export default MessageArea;

import { useContext, useEffect } from "react";
import { AuthContext } from "context/auth-context";
import styles from "./message-area.module.css";
import MessageContainer from "components/channel/message-area/message-container";
import MessageField from "./message-field";
import ColumnContainer from "components/ui/containers/column-container";
import useAxiosGet from "hooks/useAxiosGet";
import LoadingContainer from "components/ui/containers/loading-container";

function MessageArea({ id, receiver, name = "" }) {
  const { loginHeaders } = useContext(AuthContext);
  const [messagesResponse, messagesError, isMessagesLoading, refetchMessages] =
    useAxiosGet(
      `messages?receiver_id=${id}&receiver_class=${receiver}`,
      loginHeaders,
      id
    );

  useEffect(() => {
    const interval = setInterval(refetchMessages, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!isMessagesLoading ? (
        <ColumnContainer className={styles.messagesContainer}>
          <MessageContainer messagesResponse={messagesResponse} />
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

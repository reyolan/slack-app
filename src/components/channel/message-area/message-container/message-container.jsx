import { useContext, useEffect, useState } from "react";
import styles from "./message-container.module.css";
import { AuthContext } from "context/auth-context";
import ColumnContainer from "components/ui/containers/column-container";
import MessageCard from "./message-card";
import useAxiosGet from "hooks/useAxiosGet";

function MessageContainer({ id, receiver }) {
  const { loginHeaders } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [messagesResponse, messagesError, isMessagesLoading, refetchMessages] =
    useAxiosGet(
      `messages?receiver_id=${id}&receiver_class=${receiver}`,
      loginHeaders
    );

  useEffect(() => {
    console.log(messagesResponse);
  }, [messagesResponse]);

  return (
    <ColumnContainer className={styles.messageContainer}>
      <MessageCard name="Abarth" message="Hello" />
    </ColumnContainer>
  );
}

export default MessageContainer;

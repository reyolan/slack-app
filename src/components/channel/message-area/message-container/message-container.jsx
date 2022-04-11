import { useContext, useEffect, useState } from "react";
import styles from "./message-container.module.css";
import { AuthContext } from "context/auth-context";
import ColumnContainer from "components/ui/containers/column-container";
import MessageCard from "./message-card";
import useAxiosGet from "hooks/useAxiosGet";
import { getEmailUsername } from "utils/helpers";

function MessageContainer({ messagesResponse }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messagesResponse) {
      setMessages(messagesResponse.data.data.reverse());
      //check if there are optional layout to move the message cards at the bottom
    }
  }, [messagesResponse]);

  return (
    <ColumnContainer className={styles.messageContainer}>
      {messages.map((message, i) => (
        <MessageCard
          key={i}
          name={getEmailUsername(message.sender.uid)}
          message={message.body}
        />
      ))}
    </ColumnContainer>
  );
}

export default MessageContainer;

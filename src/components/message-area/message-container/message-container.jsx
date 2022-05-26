import { useState, useEffect } from "react";
import styles from "./message-container.module.css";
import ColumnContainer from "components/ui/containers/column-container";
import MessageCard from "./message-card";
import Text from "components/ui/texts/text";
import Header from "components/ui/texts/header";

function MessageContainer({ messagesResponse, name, receiver = "User" }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (messagesResponse) {
      setMessages(messagesResponse.reverse());
      console.log(messagesResponse);
    }
  }, [messagesResponse]);

  return (
    <ColumnContainer className={styles.messageContainer}>
      {messages.map((message, i) => (
        <MessageCard key={i} message={message} />
      ))}
      <Text>
        {receiver === "Channel" ? (
          `This is the start of the ${name} channel.`
        ) : (
          <>
            This is the beginning of your direct message history with{" "}
            <span className={styles.username}>{name}.</span>
          </>
        )}
      </Text>
      <Header level={1} className={styles.welcome}>
        {receiver === "Channel" ? `Welcome to ${name}!` : name}
      </Header>
    </ColumnContainer>
  );
}

export default MessageContainer;

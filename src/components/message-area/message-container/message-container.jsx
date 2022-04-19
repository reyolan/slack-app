import { useEffect, useState } from "react";
import styles from "./message-container.module.css";
import ColumnContainer from "components/ui/containers/column-container";
import MessageCard from "./message-card";
import { getEmailUsername } from "utils/helpers";
import Text from "components/ui/texts/text";
import Header from "components/ui/texts/header";

function MessageContainer({ messagesResponse, name, isChannel }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messagesResponse) {
      setMessages(messagesResponse.reverse());
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
          date={message.created_at}
        />
      ))}
      <Text>
        {isChannel ? (
          `This is the start of the ${name} channel.`
        ) : (
          <>
            This is beginning of your direct message history with{" "}
            <span className={styles.username}>{name}.</span>
          </>
        )}
      </Text>
      <Header level={1} className={styles.welcome}>
        {isChannel ? `Welcome to ${name}!` : name}
      </Header>
    </ColumnContainer>
  );
}

export default MessageContainer;
import styles from "./message-area.module.css";
import MessageContainer from "components/channel/message-area/message-container";
import MessageField from "./message-field";
import ColumnContainer from "components/ui/containers/column-container";

function MessageArea({ id, receiver, name }) {
  return (
    <ColumnContainer className={styles.messagesContainer}>
      <MessageContainer id={id} receiver={receiver} />
      <MessageField id={id} receiver={receiver} name={name} />
    </ColumnContainer>
  );
}

export default MessageArea;

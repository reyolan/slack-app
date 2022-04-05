import styles from "./message-field.module.css";
import RowContainer from "components/ui/containers/row-container";
import Button from "components/ui/button";

function MessageField() {
  return (
    <RowContainer className={styles.messageField}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Message"
        className={styles.messageInput}
      />
      <Button type="button" className={styles.sendBtn}>
        <i className="las la-paper-plane" />
      </Button>
    </RowContainer>
  );
}

export default MessageField;

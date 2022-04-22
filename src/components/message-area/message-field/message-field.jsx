import { useState } from "react";
import usePostRequest from "hooks/use-post-request";
import styles from "./message-field.module.css";
import RowContainer from "components/ui/containers/row-container";
import Button from "components/ui/button";
import useMutation from "hooks/use-mutation";

function MessageField({ id, receiver, name = "" }) {
  const postRequest = usePostRequest("messages");
  const [messageInput, setMessageInput] = useState("");
  const revalidate = useMutation();

  const handleSendMessage = () => {
    postRequest({
      receiver_id: id,
      receiver_class: receiver,
      body: messageInput,
    }).then(res => {
      if (res.response.data.data) {
        revalidate(`messages?receiver_id=${id}&receiver_class=${receiver}`);
      }
    });
    setMessageInput("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <RowContainer className={styles.messageField}>
      <input
        type="text"
        autoComplete="off"
        placeholder={`Message ${name}`}
        className={styles.messageInput}
        value={messageInput}
        onChange={e => setMessageInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        type="button"
        className={styles.sendBtn}
        onClick={handleSendMessage}
      >
        <i className="las la-lg la-paper-plane" />
      </Button>
    </RowContainer>
  );
}

export default MessageField;

import { useState } from "react";
import usePostRequest from "hooks/use-post-request";
import styles from "./message-field.module.css";
import RowContainer from "components/ui/containers/row-container";
import Button from "components/ui/button";
import useMutation from "hooks/use-mutation";
import { SEND_MESSAGE_API, messageApi } from "services/api";

function MessageField({ id, receiver, name = "" }) {
  const postRequest = usePostRequest(SEND_MESSAGE_API);
  const [messageInput, setMessageInput] = useState("");
  const revalidate = useMutation();

  const handleSendMessage = e => {
    e.preventDefault();
    postRequest({
      receiver_id: id,
      receiver_class: receiver,
      body: messageInput,
    }).then(res => {
      if (res.response.data.data) {
        revalidate(messageApi(id, receiver));
      }
    });
    setMessageInput("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSendMessage(e);
    }
  };

  return (
    <RowContainer className={styles.messageField}>
      <form onSubmit={handleSendMessage} onKeyPress={handleKeyPress}>
        <textarea
          className={styles.messageInput}
          value={messageInput}
          placeholder={`Message ${name}`}
          onChange={e => setMessageInput(e.target.value)}
          rows={1}
        />
        <Button type="submit" className={styles.sendBtn}>
          <i className="las la-lg la-paper-plane" />
        </Button>
      </form>
    </RowContainer>
  );
}

export default MessageField;

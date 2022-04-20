import { useContext, useState } from "react";
import { AuthContext } from "context/auth-context";
import useAxiosPost from "hooks/use-axios-post";
import styles from "./message-field.module.css";
import RowContainer from "components/ui/containers/row-container";
import Button from "components/ui/button";

function MessageField({ id, receiver, name = "", refetchMessages }) {
  const { loginHeaders } = useContext(AuthContext);
  const { isPosting, postRequest } = useAxiosPost();
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    postRequest(
      "messages",
      {
        receiver_id: id,
        receiver_class: receiver,
        body: messageInput,
      },
      loginHeaders
    ).then(res => {
      if (res.response.data.data) {
        refetchMessages();
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

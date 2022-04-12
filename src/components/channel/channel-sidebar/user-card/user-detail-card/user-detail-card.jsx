import { useState, useContext } from "react";
import { AuthContext } from "context/auth-context";
import { useNavigate } from "react-router-dom";
import styles from "./user-detail-card.module.css";
import useAxiosPost from "hooks/useAxiosPost";
import LetterAvatar from "components/ui/letter-avatar";
import Header from "components/ui/texts/header";
import ColumnContainer from "components/ui/containers/column-container";
import { getFirstChar } from "utils/helpers";
import InputField from "components/ui/input-field";

function UserDetailCard({ id, name, className }) {
  const { loginHeaders } = useContext(AuthContext);
  const navigate = useNavigate();
  const [messageInput, setMessageInput] = useState("");
  const { isPosting, postRequest } = useAxiosPost();

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      postRequest(
        "messages",
        { receiver_id: id, receiver_class: "User", body: messageInput },
        loginHeaders
      ).then(res => {
        if (res.response.data.data) {
          navigate(`/channels/me/${id}`);
          console.log(res);
        }
      });
    }
  };

  return (
    <ColumnContainer className={`${styles.userDetailCard} ${className}`}>
      <div>
        <LetterAvatar letter={getFirstChar(name)} className={styles.avatar} />
      </div>
      <Header level={2}>{name}</Header>
      <Header level={2}>ID: #{id}</Header>

      <InputField
        placeholder={`Message ${name}`}
        value={messageInput}
        onChange={e => setMessageInput(e.target.value)}
        className={styles.messageInput}
        onKeyPress={e => handleKeyPress(e, id)}
      />
    </ColumnContainer>
  );
}

export default UserDetailCard;

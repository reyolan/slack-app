import { useState, useContext } from "react";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import { useNavigate } from "react-router-dom";
import styles from "./user-detail-card.module.css";
import useAxiosPost from "hooks/use-axios-post";
import LetterAvatar from "components/ui/letter-avatar";
import Header from "components/ui/texts/header";
import ColumnContainer from "components/ui/containers/column-container";
import { getFirstChar } from "utils/helpers";
import InputField from "components/ui/input-field";

function UserDetailCard({ id, name, className = "" }) {
  const { loggedInId } = useContext(AuthContext);
  const { addDirectMessageUser } = useContext(DataContext);
  const navigate = useNavigate();
  const [messageInput, setMessageInput] = useState("");
  const { isPosting, postRequest } = useAxiosPost("messages");

  const handleKeyPress = (key, id, uid) => {
    if (key === "Enter") {
      postRequest({
        receiver_id: id,
        receiver_class: "User",
        body: messageInput,
      }).then(res => {
        console.log(res);
        if (res.response.data.data) {
          addDirectMessageUser(id, uid);
          navigate(`/channels/me/${id}`);
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

      {id !== loggedInId && (
        <InputField
          placeholder={`Message ${name}`}
          value={messageInput}
          onChange={e => setMessageInput(e.target.value)}
          className={styles.messageInput}
          onKeyPress={e => handleKeyPress(e.key, id, name)}
        />
      )}
    </ColumnContainer>
  );
}

export default UserDetailCard;

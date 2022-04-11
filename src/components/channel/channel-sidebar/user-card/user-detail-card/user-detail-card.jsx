import { useNavigate } from "react-router-dom";
import styles from "./user-detail-card.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import ColumnContainer from "components/ui/containers/column-container";
import { getFirstChar } from "utils/helpers";

function UserDetailCard({ id, name, className }) {
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/channels/me/${id}`);
  };

  return (
    <ColumnContainer className={`${styles.userDetailCard} ${className}`}>
      <div>
        <LetterAvatar letter={getFirstChar(name)} className={styles.avatar} />
      </div>
      <Header level={2}>{name}</Header>
      <Header level={2}>ID: #{id}</Header>
      <Button className={styles.messageBtn} onClick={() => handleClick(id)}>
        Message
      </Button>
    </ColumnContainer>
  );
}

export default UserDetailCard;

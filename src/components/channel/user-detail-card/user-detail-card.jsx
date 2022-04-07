import styles from "./user-detail-card.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import ColumnContainer from "components/ui/containers/column-container";
import { getFirstChar } from "utils/helpers";

function UserDetailCard({ name, onClick, className }) {
  //pwedeng ilagay na dito mismo yung function sa onClick tapos magpapasa nalang ng id
  return (
    <ColumnContainer className={`${styles.userDetailCard} ${className}`}>
      <div>
        <LetterAvatar letter={getFirstChar(name)} className={styles.avatar} />
      </div>
      <Header level={2}>{name}</Header>
      <Button className={styles.messageBtn} onClick={onClick}>
        Message
      </Button>
    </ColumnContainer>
  );
}

export default UserDetailCard;

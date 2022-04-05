import styles from "./user-card.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import RowContainer from "components/ui/containers/row-container";
import Text from "components/ui/texts/text";

function UserCard({ letter, name }) {
  return (
    <RowContainer className={styles.userCard}>
      <LetterAvatar letter={letter} />
      <Text>{name}</Text>
    </RowContainer>
  );
}

export default UserCard;

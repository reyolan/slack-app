import styles from "./user-card.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import RowContainer from "components/ui/containers/row-container";
import Text from "components/ui/texts/text";
import { getFirstChar } from "utils/helpers";

function UserCard({ name, id = null, className }) {
  return (
    <RowContainer className={`${styles.userCard} ${className}`}>
      <LetterAvatar letter={getFirstChar(name)} className={styles.avatar} />
      <Text className={styles.email}>
        {name} {id && `#${id}`}
      </Text>
    </RowContainer>
  );
}

export default UserCard;

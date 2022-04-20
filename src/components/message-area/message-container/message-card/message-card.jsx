import styles from "./message-card.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import ColumnContainer from "components/ui/containers/column-container";
import RowContainer from "components/ui/containers/row-container";
import Text from "components/ui/texts/text";
import { convertUTCDatetoLocalDate } from "utils/helpers";
import { getFirstChar } from "utils/helpers";

function MessageCard({ name, message, date }) {
  return (
    <RowContainer className={styles.messageCard}>
      <div>
        <LetterAvatar letter={getFirstChar(name)} className={styles.avatar} />
      </div>
      <ColumnContainer>
        <RowContainer>
          <Text className={styles.name}>{name}</Text>
          <Text className={styles.date}>{convertUTCDatetoLocalDate(date)}</Text>
        </RowContainer>
        <Text>{message}</Text>
      </ColumnContainer>
    </RowContainer>
  );
}

export default MessageCard;

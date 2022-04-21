import styles from "./message-card.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import ColumnContainer from "components/ui/containers/column-container";
import RowContainer from "components/ui/containers/row-container";
import Text from "components/ui/texts/text";
import { convertUTCDatetoLocalDate } from "utils/helpers";
import { getFirstChar, getEmailUsername } from "utils/helpers";

function MessageCard({ message }) {
  return (
    <RowContainer className={styles.messageCard}>
      <div>
        <LetterAvatar
          letter={getFirstChar(message.sender.uid)}
          className={styles.avatar}
        />
      </div>
      <ColumnContainer>
        <RowContainer>
          <Text className={styles.name}>
            {`${getEmailUsername(message.sender.uid)} #${message.sender.id}`}
          </Text>
          <Text className={styles.date}>
            {convertUTCDatetoLocalDate(message.created_at)}
          </Text>
        </RowContainer>
        <Text>{message.body}</Text>
      </ColumnContainer>
    </RowContainer>
  );
}

export default MessageCard;

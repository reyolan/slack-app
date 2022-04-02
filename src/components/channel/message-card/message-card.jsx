import styles from "./message-card.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import { getFirstChar } from "utils/helpers";

function MessageCard({ name, message }) {
  return (
    <div className={styles.container}>
      <div>
        <LetterAvatar letter={getFirstChar(name)} />
      </div>
      <div className={styles.subContainer}>
        <div>{name}</div>
        <div>{message}</div>
      </div>
    </div>
  );
}

export default MessageCard;

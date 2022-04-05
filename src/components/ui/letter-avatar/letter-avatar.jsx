import styles from "./letter-avatar.module.css";
import Text from "../texts/text";
import ColumnCenterContainer from "../containers/column-center-container";

function LetterAvatar({ letter, className = "" }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <p>{letter}</p>
    </div>
  );
}

export default LetterAvatar;

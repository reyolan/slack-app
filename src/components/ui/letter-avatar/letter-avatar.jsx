import styles from "./letter-avatar.module.css";

function LetterAvatar({ letter }) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{letter}</span>
    </div>
  );
}

export default LetterAvatar;

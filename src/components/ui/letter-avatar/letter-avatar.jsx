import styles from "./letter-avatar.module.css";

function LetterAvatar({ letter, className = "" }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <span>{letter}</span>
    </div>
  );
}

export default LetterAvatar;

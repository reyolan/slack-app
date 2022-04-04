import styles from "./letter-avatar.module.css";

function LetterAvatar({ letter, className = "" }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <p>{letter}</p>
    </div>
  );
}

export default LetterAvatar;

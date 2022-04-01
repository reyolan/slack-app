import styles from "./button.module.css";

function Button({ type, onClick, children }) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;

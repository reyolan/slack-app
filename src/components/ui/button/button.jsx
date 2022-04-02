import styles from "./button.module.css";

function Button({ type, onClick, className = "", children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

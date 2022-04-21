import styles from "./error-text.module.css";

function ErrorText({ children, className = "" }) {
  return <span className={`${styles.text} ${className}`}>{children}</span>;
}

export default ErrorText;

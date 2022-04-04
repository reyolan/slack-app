import styles from "./text.module.css";

function Text({ children, className }) {
  return <p className={`${styles.text} ${className}`}>{children}</p>;
}

export default Text;

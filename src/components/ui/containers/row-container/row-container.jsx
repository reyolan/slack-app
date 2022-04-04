import styles from "./row-container.module.css";

function RowContainer({ children, className = "" }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}

export default RowContainer;

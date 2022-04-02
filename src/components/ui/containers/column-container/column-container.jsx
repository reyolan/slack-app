import styles from "./column-container.module.css";

function ColumnContainer({ children, className = "" }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}

export default ColumnContainer;

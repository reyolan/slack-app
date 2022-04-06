import styles from "./unordered-list.module.css";

function UnorderedList({ children, className = "" }) {
  return <ul className={`${styles.list} ${className}`}>{children}</ul>;
}

export default UnorderedList;

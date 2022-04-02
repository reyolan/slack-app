import styles from "./unordered-list.module.css";

function UnorderedList({ children }) {
  return <ul className={styles.list}>{children}</ul>;
}

export default UnorderedList;

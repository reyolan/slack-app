import styles from "./header.module.css";

function Header({ children }) {
  return <h1 className={styles.header}>{children}</h1>;
}

export default Header;

import styles from "./main-container.module.css";

function MainContainer({ children }) {
  return <div className={styles.mainContainer}>{children}</div>;
}

export default MainContainer;

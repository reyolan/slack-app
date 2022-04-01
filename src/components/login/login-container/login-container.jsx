import styles from "./login-container.module.css";

function LoginContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default LoginContainer;

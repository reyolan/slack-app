import styles from "./error-text.module.css";
import Text from "../text";

function ErrorText({ children }) {
  return <Text className={styles.text}>{children}</Text>;
}

export default ErrorText;

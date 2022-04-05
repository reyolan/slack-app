import styles from "./sidebar.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import ColumnCenterContainer from "components/ui/containers/column-center-container";

function SideBar() {
  return (
    <ColumnCenterContainer className={styles.container}>
      <LetterAvatar letter="A" className={styles.icon} />
      <LetterAvatar letter="B" className={styles.icon} />
      <LetterAvatar letter="+" className={`${styles.add} ${styles.icon}`} />
    </ColumnCenterContainer>
  );
}

export default SideBar;

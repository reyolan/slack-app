import styles from "./sidebar.module.css";
import LetterAvatar from "components/ui/letter-avatar";

function SideBar() {
  return (
    <div className={styles.container}>
      <LetterAvatar letter="A" />
      <LetterAvatar letter="B" />
    </div>
  );
}

export default SideBar;

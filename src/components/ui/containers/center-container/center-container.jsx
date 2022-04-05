import ColumnCenterContainer from "../column-center-container";
import styles from "./center-container.module.css";

function CenterContainer({ children }) {
  return (
    <ColumnCenterContainer>
      <ColumnCenterContainer className={styles.container}>
        {children}
      </ColumnCenterContainer>
    </ColumnCenterContainer>
  );
}

export default CenterContainer;

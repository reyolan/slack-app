import ColumnCenterContainer from "../column-center-container";
import styles from "./center-container.module.css";

function CenterContainer({ children, className = "" }) {
  return (
    <ColumnCenterContainer className={className}>
      <ColumnCenterContainer className={styles.container}>
        {children}
      </ColumnCenterContainer>
    </ColumnCenterContainer>
  );
}

export default CenterContainer;

import ColumnContainer from "../column-container";
import styles from "./column-center-container.module.css";

function ColumnCenterContainer({ children, className }) {
  return (
    <ColumnContainer className={`${styles.center} ${className}`}>
      {children}
    </ColumnContainer>
  );
}

export default ColumnCenterContainer;

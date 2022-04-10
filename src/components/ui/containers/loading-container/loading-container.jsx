import styles from "./loading-container.module.css";
import ColumnCenterContainer from "../column-center-container";
import Header from "components/ui/texts/header";
import LoadSpinner from "components/ui/load-spinner";

function LoadingContainer({ children }) {
  return (
    <ColumnCenterContainer className={styles.loadingContainer}>
      <LoadSpinner />
      {children}
    </ColumnCenterContainer>
  );
}

export default LoadingContainer;

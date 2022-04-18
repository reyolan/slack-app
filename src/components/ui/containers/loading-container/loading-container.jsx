import styles from "./loading-container.module.css";
import ColumnCenterContainer from "../column-center-container";
import LoadSpinner from "components/ui/load-spinner";

function LoadingContainer({ children, className = "" }) {
  return (
    <ColumnCenterContainer
      className={`${styles.loadingContainer} ${className}`}
    >
      <LoadSpinner />
      {children}
    </ColumnCenterContainer>
  );
}

export default LoadingContainer;

import styles from "./form-container.module.css";
import ColumnContainer from "../column-container";

function FormContainer({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <ColumnContainer className={styles.formInput}>{children}</ColumnContainer>
    </form>
  );
}

export default FormContainer;

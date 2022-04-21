import styles from "./input-field.module.css";
import Text from "../texts/text";
import ColumnContainer from "../containers/column-container";
import ErrorText from "../texts/error-text";

function InputField({
  className = "",
  name = "",
  label = "",
  error = "",
  ...props
}) {
  return (
    <ColumnContainer className={`${styles.inputContainer} ${className}`}>
      {label && (
        <div>
          <Text className={styles.label}>
            <label htmlFor={name} className={styles.label}>
              {label}&nbsp;
            </label>

            <ErrorText className={styles.error}>{error}</ErrorText>
          </Text>
        </div>
      )}
      <input className={styles.input} id={name} autoComplete="off" {...props} />
    </ColumnContainer>
  );
}

export default InputField;

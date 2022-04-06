import styles from "./input-field.module.css";
import Text from "../texts/text";
import ColumnContainer from "../containers/column-container";

function InputField({
  name = "",
  label = "",
  type,
  value = "",
  placeholder = null,
  onChange,
  error = null,
  className = "",
}) {
  return (
    <ColumnContainer className={`${styles.inputContainer} ${className}`}>
      <div>
        <Text className={styles.label}>
          <label htmlFor={name} className={styles.label}>
            {label}&nbsp;
          </label>
          <span className={styles.error}>{error}</span>
        </Text>
      </div>
      <input
        className={styles.input}
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        value={value}
      />
    </ColumnContainer>
  );
}

export default InputField;

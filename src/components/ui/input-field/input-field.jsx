import styles from "./input-field.module.css";

function InputField({
  name,
  label,
  type,
  placeholder,
  onChange,
  error = null,
}) {
  return (
    <div>
      <div>
        <span>
          <label htmlFor={name}>{label}</label>
        </span>
        <span>- {error}</span>
      </div>
      <input
        className={styles.input}
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;

import styles from "./load-spinner.module.css";

function LoadSpinner() {
  return (
    <div className={styles.ldsRipple}>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadSpinner;

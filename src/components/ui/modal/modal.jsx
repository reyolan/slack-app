import styles from "./modal.style.css";

function Modal({ children }) {
  return (
    <div className={styles.box}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Modal;

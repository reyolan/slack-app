import styles from "./modal.module.css";
import ColumnCenterContainer from "../containers/column-center-container";

function Modal({ children, className, toggleModal }) {
  return (
    <ColumnCenterContainer className={styles.box}>
      <div className={`${styles.container} ${className}`}>
        <div className={styles.closeBtn}>
          <i className="las la-times" onClick={toggleModal} />
        </div>
        {children}
      </div>
    </ColumnCenterContainer>
  );
}

export default Modal;

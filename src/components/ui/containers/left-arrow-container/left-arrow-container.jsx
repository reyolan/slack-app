import styles from "./left-arrow-container.module.css";

function LeftArrowContainer({ children, className }) {
  return <div className={`${styles.arrowBox} ${className}`}>{children}</div>;
}

export default LeftArrowContainer;

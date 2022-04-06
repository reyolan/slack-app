import styles from "./top-arrow-container.module.css";

function TopArrowContainer({ children, className }) {
  return (
    <div className={className}>
      <div className={`${styles.arrowBox} ${className}`}>{children}</div>
    </div>
  );
}

export default TopArrowContainer;

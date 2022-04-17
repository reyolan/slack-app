import styles from "./header.module.css";

function Header({ children, level, className = "" }) {
  switch (level) {
    case 1:
      return (
        <h1 className={`${styles.header1} ${styles.header} ${className}`}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={`${styles.header2} ${styles.header} ${className}`}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`${styles.header3} ${styles.header} ${className}`}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`${styles.header4} ${styles.header} ${className}`}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`${styles.header5} ${styles.header} ${className}`}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={`${styles.header6} ${styles.header} ${className}`}>
          {children}
        </h6>
      );
    default:
      return (
        <h1 className={`${styles.header1} ${styles.header} ${className}`}>
          {children}
        </h1>
      );
  }
}
export default Header;

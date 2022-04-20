import styles from "./curved-link.module.css";
import { Link } from "react-router-dom";

function CurvedLink({ children, to, className = "" }) {
  return (
    <Link to={to} className={`${styles.button} ${className}`}>
      {children}
    </Link>
  );
}

export default CurvedLink;

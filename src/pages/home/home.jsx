import ColumnCenterContainer from "components/ui/containers/column-center-container";
import RowContainer from "components/ui/containers/row-container";
import { Link } from "react-router-dom";
import Header from "components/ui/texts/header";
import styles from "./home.module.css";

function Home() {
  return (
    <ColumnCenterContainer className={styles.container}>
      <Header level={1}>Slock</Header>
      <RowContainer className={styles.linkContainer}>
        <Link to="/register" className={styles.link}>
          Register
        </Link>
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </RowContainer>
    </ColumnCenterContainer>
  );
}

export default Home;

import ColumnCenterContainer from "components/ui/containers/column-center-container";
import ColumnContainer from "components/ui/containers/column-container";
import RowContainer from "components/ui/containers/row-container";
import Header from "components/ui/texts/header";
import styles from "./home.module.css";
import CurvedLink from "components/home/curved-link";
import Text from "components/ui/texts/text";

function Home() {
  return (
    <ColumnContainer className={styles.pageContainer}>
      <RowContainer className={styles.appNameContainer}>
        <img src="assets/images/logo.png" alt="DiSlack Logo" />
        <Header level={1} className={styles.name}>
          DiSlack
        </Header>
      </RowContainer>
      <ColumnCenterContainer className={styles.contentContainer}>
        <ColumnContainer>
          <Header level={1} className={styles.headline}>
            VISUALIZE A WORLD...
          </Header>
          <Text className={styles.text}>
            ...where you can communicate digitally. A place to communicate
            without needing to show up face-to-face.
          </Text>
        </ColumnContainer>
        <RowContainer className={styles.linkContainer}>
          <CurvedLink to="register">Register Now</CurvedLink>
          <CurvedLink to="login">Login to DiSlack</CurvedLink>
        </RowContainer>
      </ColumnCenterContainer>
      {/* <Header level={1}>Slack</Header>
      <RowContainer className={styles.linkContainer}>
        <Link to="/register" className={styles.link}>
          Register
        </Link>
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </RowContainer> */}
    </ColumnContainer>
  );
}

export default Home;

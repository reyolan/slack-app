import ColumnCenterContainer from "components/ui/containers/column-center-container";
import ColumnContainer from "components/ui/containers/column-container";
import RowContainer from "components/ui/containers/row-container";
import Header from "components/ui/texts/header";
import styles from "./home.module.css";
import CurvedLink from "components/home/curved-link";
import Text from "components/ui/texts/text";
import logo from "assets/images/logo.png";

function Home() {
  return (
    <ColumnCenterContainer className={styles.pageContainer}>
      <RowContainer className={styles.appNameContainer}>
        <img src={logo} alt="DiSlack Logo" />
        <Header level={1} className={styles.name}>
          DiSlack
        </Header>
      </RowContainer>
      <ColumnCenterContainer className={styles.contentContainer}>
        <ColumnContainer>
          <Header level={1} className={styles.headline}>
            VISUALIZE A PLACE...
          </Header>
          <Text className={styles.text}>
            ...where you can communicate digitally. A place to communicate
            without needing to show up face-to-face. A place to connect people
            to get information as soon as possible. A place to bring people
            together and work as a team.
          </Text>
        </ColumnContainer>
        <RowContainer className={styles.linkContainer}>
          <CurvedLink to="register">Register Now</CurvedLink>
          <CurvedLink to="login">Login to DiSlack</CurvedLink>
        </RowContainer>
      </ColumnCenterContainer>
    </ColumnCenterContainer>
  );
}

export default Home;

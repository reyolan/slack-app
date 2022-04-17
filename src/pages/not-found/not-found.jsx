import styles from "./not-found.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import Header from "components/ui/texts/header";
import Text from "components/ui/texts/text";

function NotFound() {
  return (
    <ColumnCenterContainer className={styles.notFound}>
      <Header level={1}>Error: 404</Header>
      <Text className={styles.text}>Page Not Found!</Text>
    </ColumnCenterContainer>
  );
}

export default NotFound;

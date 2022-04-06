import styles from "./dashboard-interface.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";

function DashboardInterface() {
  return (
    <ColumnCenterContainer className={styles.interface}>
      <Header level={1}>Welcome!</Header>
      <Header level={2} className={styles.username}>
        Username: Rey
      </Header>
      <Button type="button" className={styles.signOut}>
        Sign out
      </Button>
    </ColumnCenterContainer>
  );
}

export default DashboardInterface;

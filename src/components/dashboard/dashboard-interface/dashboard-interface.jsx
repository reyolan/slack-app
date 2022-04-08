import styles from "./dashboard-interface.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import { useContext } from "react";
import { AuthContext } from "context/auth-context";

function DashboardInterface() {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <ColumnCenterContainer className={styles.interface}>
      <Header level={1}>Welcome!</Header>
      <Header level={2} className={styles.username}>
        Username: {loggedInUser}
      </Header>
      <Button type="button" className={styles.signOut}>
        Sign out
      </Button>
    </ColumnCenterContainer>
  );
}

export default DashboardInterface;

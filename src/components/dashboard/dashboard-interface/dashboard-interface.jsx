import { useContext } from "react";
import { AuthContext } from "context/auth-context";
import styles from "./dashboard-interface.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";

function DashboardInterface() {
  const { setIsAuthenticated, loggedInUser, loggedInId } =
    useContext(AuthContext);
  return (
    <ColumnCenterContainer className={styles.interface}>
      <Header level={1}>Welcome!</Header>
      <Header level={2} className={styles.username}>
        Username: {loggedInUser}
      </Header>
      <Header level={2} className={styles.username}>
        ID: {loggedInId}
      </Header>
      <Button
        type="button"
        className={styles.signOut}
        onClick={() => {
          setIsAuthenticated(false);
          localStorage.clear();
        }}
      >
        Sign out <i className="las la-sign-out-alt" />
      </Button>
    </ColumnCenterContainer>
  );
}

export default DashboardInterface;

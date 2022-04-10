import { useContext } from "react";
import { AuthContext } from "context/auth-context";
import styles from "./dashboard.module.css";
import DashboardSidebar from "components/dashboard/dashboard-sidebar";
import ColumnContainer from "components/ui/containers/column-container";
import MessageContainer from "components/channel/message-container";
import MessageField from "components/channel/message-field";
import DashboardInterface from "components/dashboard/dashboard-interface";

function Dashboard() {
  const { loggedInUser, loggedInId } = useContext(AuthContext);

  return (
    <>
      <DashboardSidebar loggedInUser={loggedInUser} loggedInId={loggedInId} />
      <DashboardInterface loggedInUser={loggedInUser} loggedInId={loggedInId} />
    </>
  );
}

export default Dashboard;

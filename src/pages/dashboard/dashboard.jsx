import { useContext } from "react";
import { AuthContext } from "context/auth-context";
import styles from "./dashboard.module.css";
import DashboardSidebar from "components/dashboard/dashboard-sidebar";
import ColumnContainer from "components/ui/containers/column-container";
import MessageArea from "components/channel/message-area";
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

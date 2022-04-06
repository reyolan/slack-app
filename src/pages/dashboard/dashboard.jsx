import styles from "./dashboard.module.css";
import DashboardSidebar from "components/dashboard/dashboard-sidebar";
import RowContainer from "components/ui/containers/row-container";
import Sidebar from "components/sidebar";
import ColumnContainer from "components/ui/containers/column-container";
import MessageContainer from "components/channel/message-container";
import MessageField from "components/channel/message-field";
import DashboardInterface from "components/dashboard/dashboard-interface";

function Dashboard() {
  return (
    <RowContainer className={styles.layout}>
      <Sidebar />
      <DashboardSidebar />
      <DashboardInterface />
    </RowContainer>
  );
}

export default Dashboard;

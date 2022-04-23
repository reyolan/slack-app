import { Outlet } from "react-router-dom";
import styles from "./main-page.module.css";
import Sidebar from "components/sidebar";
import Topbar from "components/topbar";

function MainPage() {
  return (
    <>
      <Topbar />
      <div className={styles.layout}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default MainPage;

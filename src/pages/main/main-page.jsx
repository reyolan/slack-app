import { useContext } from "react";
import { Outlet } from "react-router-dom";
import styles from "./main-page.module.css";
import Sidebar from "components/sidebar";
import Topbar from "components/topbar";
import { DataContext } from "context/data-context";
import LoadingContainer from "components/ui/containers/loading-container";

function MainPage() {
  const { isChannelListLoading } = useContext(DataContext);

  return (
    <>
      {!isChannelListLoading ? (
        <>
          <Topbar />
          <div className={styles.layout}>
            <Sidebar />
            <Outlet />
          </div>
        </>
      ) : (
        <LoadingContainer />
      )}
    </>
  );
}

export default MainPage;

import { useContext } from "react";
import { MobileInterfaceContext } from "context/mobile-interface-context";
import styles from "./topbar.module.css";
import Header from "components/ui/texts/header";

function Topbar() {
  const { handleClickLeftSidebar, handleClickRightSidebar } = useContext(
    MobileInterfaceContext
  );

  return (
    <div className={styles.topbar}>
      <i className="las la-bars" onClick={handleClickLeftSidebar} />
      <Header level={1}>DiSlack</Header>
      <i className="las la-user-friends" onClick={handleClickRightSidebar} />
    </div>
  );
}

export default Topbar;

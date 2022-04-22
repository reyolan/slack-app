import { useState } from "react";
import styles from "./topbar.module.css";
import Header from "components/ui/texts/header";

function Topbar() {
  const [isLeftSidebarClicked, setIsLeftSidebarClicked] = useState(false);
  const [isRightSidebarClicked, setIsRightSidebarClicked] = useState(false);

  const showSidebar = () => {
    console.log("clicked");
    //pag kinlick ko to, may className
    //create a mobile component?
  };

  const showSecondSidebar = () => {
    console.log("another click");
  };
  return (
    <div className={styles.topbar}>
      <i className="las la-bars" onClick={showSidebar} />
      <Header level={1}>DiSlack</Header>
      <i className="las la-users" onClick={showSecondSidebar} />
    </div>
  );
}

export default Topbar;

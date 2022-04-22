import { useContext } from "react";
import styles from "./channel-sidebar-container.module.css";
import ColumnContainer from "../column-container";
import { MobileInterfaceContext } from "context/mobile-interface-context";

function ChannelSidebarContainer({ children, className = "" }) {
  const { isRightSidebarClicked } = useContext(MobileInterfaceContext);
  return (
    <ColumnContainer
      className={`${styles.channelSidebar} ${className} ${
        isRightSidebarClicked ? styles.sidebarClicked : ""
      }`}
    >
      {children}
    </ColumnContainer>
  );
}

export default ChannelSidebarContainer;

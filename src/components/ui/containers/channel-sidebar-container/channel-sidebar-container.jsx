import styles from "./channel-sidebar-container.module.css";
import ColumnContainer from "../column-container";

function ChannelSidebarContainer({ children, className = "" }) {
  return (
    <ColumnContainer className={`${styles.channelSidebar} ${className}`}>
      {children}
    </ColumnContainer>
  );
}

export default ChannelSidebarContainer;

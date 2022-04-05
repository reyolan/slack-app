import styles from "./channel-sidebar-container.module.css";
import ColumnContainer from "../column-container";

function ChannelSidebarContainer({ children }) {
  return (
    <ColumnContainer className={styles.channelSidebar}>
      {children}
    </ColumnContainer>
  );
}

export default ChannelSidebarContainer;

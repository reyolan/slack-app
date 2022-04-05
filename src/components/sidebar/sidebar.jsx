import styles from "./sidebar.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import ChannelCard from "components/sidebar/channel-card";

function Sidebar() {
  return (
    <ColumnCenterContainer className={styles.container}>
      <ChannelCard channelName="Abarth" />
      <ChannelCard channelName="Barter" />
      <ChannelCard channelName="+" hoverName="Add a server" />
    </ColumnCenterContainer>
  );
}

export default Sidebar;

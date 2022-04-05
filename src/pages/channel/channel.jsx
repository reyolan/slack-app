import { useParams } from "react-router-dom";
import styles from "./channel.module.css";
import RowContainer from "components/ui/containers/row-container";
import SideBar from "components/sidebar";
import ChannelSideBar from "components/channel/channel-sidebar";

function Channel() {
  return (
    <RowContainer className={styles.layout}>
      <SideBar />
      <ChannelSideBar />
    </RowContainer>
  );
}

export default Channel;

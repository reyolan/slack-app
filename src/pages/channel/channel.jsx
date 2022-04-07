import { useParams } from "react-router-dom";
import styles from "./channel.module.css";
import RowContainer from "components/ui/containers/row-container";
import Sidebar from "components/sidebar";
import ChannelSideBar from "components/channel/channel-sidebar";
import MessageContainer from "components/channel/message-container";
import ColumnContainer from "components/ui/containers/column-container";
import MessageField from "components/channel/message-field";

function Channel() {
  return (
    <RowContainer className={styles.layout}>
      {/* <Sidebar /> */}
      <ChannelSideBar />
      <ColumnContainer className={styles.messagesContainer}>
        <MessageContainer />
        <MessageField />
      </ColumnContainer>
    </RowContainer>
  );
}

export default Channel;

import styles from "./sidebar.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import ChannelCard from "components/sidebar/channel-card";
import UnorderedList from "components/ui/unordered-list";

const CHANNEL_NAMES = [
  "Abarth",
  "Barter",
  "Noob Squad",
  "The Great Crypto",
  "PC Master Race",
  "KQM | Genshin Impact",
  "The Crew Community",
  "Avion School",
  "SERVER",
  "SERVER",
  "SERVER",
  "SERVER",
  "SERVER",
  "SERVER",
  "SERVER",
  "SERVER",
];

function Sidebar() {
  return (
    <ColumnCenterContainer className={styles.container}>
      <UnorderedList className={styles.channelList}>
        <li>
          <ChannelCard channelName="Home" />
        </li>

        {CHANNEL_NAMES.map((channel, i) => (
          <li key={i}>
            <ChannelCard channelName={channel} />
          </li>
        ))}

        <li>
          <ChannelCard channelName="+" hoverName="Add a server" />
        </li>
      </UnorderedList>
    </ColumnCenterContainer>
  );
}

export default Sidebar;

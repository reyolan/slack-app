import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/data-context";
import { useParams } from "react-router-dom";
import useModal from "hooks/use-modal";
import styles from "./sidebar.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import ChannelCard from "components/sidebar/channel-card";
import UnorderedList from "components/ui/unordered-list";
import AddChannelModal from "./add-channel-modal";

function Sidebar() {
  const { isOpen, toggleModal } = useModal(false);
  const { channelList } = useContext(DataContext);
  const { channelId } = useParams();

  return (
    <>
      {isOpen && <AddChannelModal toggleModal={toggleModal} />}
      <ColumnCenterContainer className={styles.container}>
        <UnorderedList className={styles.channelList}>
          <li>
            <Link to="/channels/me">
              <ChannelCard
                channelName="Home"
                isSelected={!channelId ? true : false}
              />
            </Link>
          </li>

          {channelList.map((channel, i) => (
            <li key={i}>
              <Link to={`/channels/${channel.id}`}>
                <ChannelCard
                  channelName={channel.name}
                  isSelected={+channelId === channel.id ? true : false}
                />
              </Link>
            </li>
          ))}

          <li onClick={toggleModal}>
            <ChannelCard channelName="+" hoverName="Add a server" />
          </li>
        </UnorderedList>
      </ColumnCenterContainer>
    </>
  );
}

export default Sidebar;

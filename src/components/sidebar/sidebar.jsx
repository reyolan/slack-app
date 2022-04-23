import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useModal from "hooks/use-modal";
import styles from "./sidebar.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import ChannelCard from "components/sidebar/channel-card";
import UnorderedList from "components/ui/unordered-list";
import AddChannelModal from "./add-channel-modal";
import { MobileInterfaceContext } from "context/mobile-interface-context";
import useGetRequest from "hooks/use-get-request";
import { CHANNEL_LIST_API } from "services/api";
import LoadingContainer from "components/ui/containers/loading-container";

function Sidebar() {
  const { isOpen, toggleModal } = useModal(false);
  const { isLeftSidebarClicked } = useContext(MobileInterfaceContext);
  const { channelId, userId } = useParams();
  const [channelList, isChannelListLoading] = useGetRequest(CHANNEL_LIST_API);

  return (
    <>
      {isOpen && <AddChannelModal toggleModal={toggleModal} />}

      <ColumnCenterContainer
        className={`${styles.container} ${
          isLeftSidebarClicked ? styles.containerClicked : ""
        }`}
      >
        {!isChannelListLoading ? (
          <UnorderedList className={styles.channelList}>
            <li>
              <Link to="/channels/me">
                <ChannelCard
                  channelName="Home"
                  isSelected={!channelId && !userId ? true : false}
                />
              </Link>

              <div onClick={toggleModal}>
                <ChannelCard channelName="+" hoverName="Add a server" />
              </div>
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
          </UnorderedList>
        ) : (
          <LoadingContainer className={styles.loading} />
        )}
      </ColumnCenterContainer>
    </>
  );
}

export default Sidebar;

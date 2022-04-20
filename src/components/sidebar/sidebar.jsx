import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { DataContext } from "context/data-context";
import { useParams } from "react-router-dom";
import useModal from "hooks/use-modal";
import styles from "./sidebar.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import ChannelCard from "components/sidebar/channel-card";
import UnorderedList from "components/ui/unordered-list";
import AddChannelModal from "./add-channel-modal";
import LoadingContainer from "components/ui/containers/loading-container";

function Sidebar() {
  const { isOpen, toggleModal } = useModal(false);
  const { isChannelListLoading, channelList } = useContext(DataContext);
  const { channelId } = useParams();

  return (
    <>
      {!isChannelListLoading ? (
        <div className={styles.layout}>
          {isOpen && <AddChannelModal toggleModal={toggleModal} />}
          <ColumnCenterContainer className={styles.container}>
            <UnorderedList className={styles.channelList}>
              <li>
                <NavLink to="/channels/me">
                  <ChannelCard
                    channelName="Home"
                    isSelected={!channelId ? true : false}
                  />
                </NavLink>
              </li>

              {channelList?.map((channel, i) => (
                <li key={i}>
                  <NavLink to={`/channels/${channel.id}`}>
                    <ChannelCard
                      channelName={channel.name}
                      isSelected={+channelId === channel.id ? true : false}
                    />
                  </NavLink>
                </li>
              ))}

              <li onClick={toggleModal}>
                <ChannelCard channelName="+" hoverName="Add a server" />
              </li>
            </UnorderedList>
          </ColumnCenterContainer>
          <Outlet />
        </div>
      ) : (
        <LoadingContainer />
      )}
    </>
  );
}

export default Sidebar;

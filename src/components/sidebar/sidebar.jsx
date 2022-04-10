import { Outlet, NavLink } from "react-router-dom";
import { DataContext } from "context/data-context";
import { AuthContext } from "context/auth-context";
import useModal from "hooks/useModal";
import styles from "./sidebar.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import ChannelCard from "components/sidebar/channel-card";
import UnorderedList from "components/ui/unordered-list";
import AddChannelModal from "./add-channel-modal";
import { useEffect, useContext } from "react";
import { getRequest } from "services/axios-resolver";
import useAxiosGet from "hooks/useAxiosGet";

const CHANNEL_NAMES = [
  "Abarth",
  "Barter",
  "Noob Squad",
  "The Great Crypto",
  "PC Master Race",
];

function Sidebar() {
  const { isOpen, toggleModal } = useModal(false);
  const { loginHeaders } = useContext(AuthContext);
  const { setChannels, channels } = useContext(DataContext);
  const [response, error, isLoading] = useAxiosGet("channels", loginHeaders);

  useEffect(() => {
    if (response) {
      setChannels(response.data.data);
      console.log(channels);
    }
  }, [response]);

  return (
    <div className={styles.layout}>
      {isOpen && <AddChannelModal toggleModal={toggleModal} />}
      <ColumnCenterContainer className={styles.container}>
        <UnorderedList className={styles.channelList}>
          <li>
            <NavLink to="/channels/me">
              <ChannelCard channelName="Home" />
            </NavLink>
          </li>

          {channels.map((channel, i) => (
            <li key={i}>
              <NavLink to={`/channels/${channel.id}`}>
                <ChannelCard channelName={channel.name} />
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
  );
}

export default Sidebar;

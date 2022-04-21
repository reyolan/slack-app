import { useContext } from "react";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import { Link } from "react-router-dom";
import InputField from "components/ui/input-field";
import styles from "./dashboard-sidebar.module.css";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import Header from "components/ui/texts/header";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "components/channel/channel-sidebar/user-card";
import useFilterUser from "hooks/use-filter-user";
import DirectMessagesList from "./direct-messages-list";

function DashboardSidebar({ allUsers }) {
  const { loggedInId, loggedInUser } = useContext(AuthContext);
  const { search, filteredUsers, setSearch } = useFilterUser(allUsers);
  const { addDirectMessageUser } = useContext(DataContext);

  const handleClick = (uid, id) => {
    setSearch("");
    addDirectMessageUser(id, uid);
  };

  return (
    <ChannelSidebarContainer>
      <Header
        level={2}
        className={styles.username}
      >{`${loggedInUser} #${loggedInId}`}</Header>

      <DirectMessagesList />

      <Header level={2}>Start conversation</Header>
      <InputField
        type="text"
        value={search}
        placeholder="Message a user"
        onChange={e => setSearch(e.target.value)}
      />
      <UnorderedList className={styles.userList}>
        {filteredUsers.map(user => {
          return (
            <li key={user.id}>
              <Link
                to={`/channels/me/${user.id}`}
                onClick={() => handleClick(user.uid, user.id)}
              >
                <UserCard
                  name={user.uid}
                  id={user.id}
                  className={styles.userCard}
                />
              </Link>
            </li>
          );
        })}
      </UnorderedList>
    </ChannelSidebarContainer>
  );
}

export default DashboardSidebar;

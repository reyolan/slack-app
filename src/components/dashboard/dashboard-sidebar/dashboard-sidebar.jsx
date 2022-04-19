import { useContext } from "react";
import { DataContext } from "context/data-context";
import { NavLink, Link, useParams } from "react-router-dom";
import InputField from "components/ui/input-field";
import styles from "./dashboard-sidebar.module.css";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import Header from "components/ui/texts/header";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "components/channel/channel-sidebar/user-card";
import useFilterUser from "hooks/useFilterUser";

function DashboardSidebar({ loggedInUser, loggedInId, allUsers }) {
  const { search, filteredUsers, debounceSearch, setSearch } =
    useFilterUser(allUsers);
  const { directMessages, addDirectMessageUser } = useContext(DataContext);
  const { userId } = useParams();

  const handleClick = (uid, id) => {
    setSearch("");
    debounceSearch("");
    addDirectMessageUser(id, uid);
  };

  return (
    <ChannelSidebarContainer>
      <Header
        level={2}
        className={styles.username}
      >{`${loggedInUser} #${loggedInId} `}</Header>

      <Header level={2}>Direct Messages</Header>
      <UnorderedList className={styles.directMessageList}>
        {directMessages.map(directMessage => (
          <li
            key={directMessage.id}
            className={directMessage.id === +userId ? styles.active : ""}
          >
            <Link to={`/channels/me/${directMessage.id}`}>
              <UserCard
                name={directMessage.uid}
                id={directMessage.id}
                className={styles.userCard}
              />
            </Link>
          </li>
        ))}
      </UnorderedList>

      <InputField
        type="text"
        value={search}
        placeholder="Message a user"
        onChange={e => {
          setSearch(e.target.value);
          debounceSearch(e.target.value);
        }}
      />
      <UnorderedList>
        {filteredUsers.map(user => {
          return (
            <li key={user.id}>
              <NavLink
                to={`/channels/me/${user.id}`}
                onClick={() => handleClick(user.uid, user.id)}
              >
                <UserCard
                  name={user.uid}
                  id={user.id}
                  className={styles.userCard}
                />
              </NavLink>
            </li>
          );
        })}
      </UnorderedList>
    </ChannelSidebarContainer>
  );
}

export default DashboardSidebar;

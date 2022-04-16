import { NavLink } from "react-router-dom";
import InputField from "components/ui/input-field";
import styles from "./dashboard-sidebar.module.css";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import Header from "components/ui/texts/header";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "components/channel/channel-sidebar/user-card";
import LoadingContainer from "components/ui/containers/loading-container";
import useFilterUser from "hooks/useFilterUser";
import { getEmailUsername } from "utils/helpers";

function DashboardSidebar({ loggedInUser, loggedInId, allUsers }) {
  const { search, filteredUsers, debounceSearch, setSearch } =
    useFilterUser(allUsers);

  return (
    <ChannelSidebarContainer className={styles.sidebarContainer}>
      <Header level={2}>{`${loggedInUser} #${loggedInId} `}</Header>
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
              <NavLink to={`/channels/me/${user.id}`}>
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

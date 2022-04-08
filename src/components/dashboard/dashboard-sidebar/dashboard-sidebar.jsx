import { useContext } from "react";
import { AuthContext } from "context/auth-context";
import { NavLink } from "react-router-dom";
import styles from "./dashboard-sidebar.module.css";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import Header from "components/ui/texts/header";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "components/channel/channel-sidebar/user-card";
import { getEmailUsername } from "utils/helpers";

const NAMES = [
  "Daniel",
  "Dominique",
  "Evan",
  "Raven",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
];
function DashboardSidebar() {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <ChannelSidebarContainer>
      <Header level={2}>{loggedInUser}</Header>
      <Header level={2}>Direct Messages</Header>
      <UnorderedList>
        {NAMES.map((user, i) => {
          return (
            <li key={i}>
              <UserCard name={user} />
              {/* dito dapat pagkaclick nung li, mapapanavigate tayo don sa messages  */}
              {/* so may navigate dapat tayo dito na link pagkaclick nung li */}
            </li>
          );
        })}
      </UnorderedList>
    </ChannelSidebarContainer>
  );
}

export default DashboardSidebar;

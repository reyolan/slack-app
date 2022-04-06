import styles from "./dashboard-sidebar.module.css";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import Header from "components/ui/texts/header";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "components/channel/channel-sidebar/user-card";

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
  return (
    <ChannelSidebarContainer>
      <Header level={2}>Username</Header>
      <Header level={2}>Direct Messages</Header>
      <UnorderedList>
        {NAMES.map((user, i) => {
          return (
            <li key={i}>
              <UserCard name={user} />
            </li>
          );
        })}
      </UnorderedList>
    </ChannelSidebarContainer>
  );
}

export default DashboardSidebar;

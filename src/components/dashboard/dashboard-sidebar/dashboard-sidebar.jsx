import { NavLink } from "react-router-dom";
import styles from "./dashboard-sidebar.module.css";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import Header from "components/ui/texts/header";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "components/channel/channel-sidebar/user-card";

const NAMES = ["Daniel", "Dominique", "Evan", "Raven", "Abarth", "Abarth"];

function DashboardSidebar({ loggedInUser, loggedInId }) {
  return (
    <ChannelSidebarContainer>
      <Header level={2}>{`${loggedInUser} #${loggedInId} `}</Header>
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

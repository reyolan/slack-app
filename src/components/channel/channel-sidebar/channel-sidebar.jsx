import styles from "./channel-sidebar.module.css";
import ColumnContainer from "components/ui/containers/column-container";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "../user-card";
import Header from "components/ui/texts/header";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import { getFirstChar } from "utils/helpers";

function ChannelSideBar(/*{ isAdmin, users }*/) {
  return (
    <ChannelSidebarContainer>
      <Header level={2}>Channel Name</Header>
      {/* {isAdmin && <Button type="button">Add Users</Button>} */}
      <Button type="button" className={styles.addBtn}>
        Add Members
      </Button>
      <Header level={2}>Members</Header>
      <UnorderedList>
        {/* {users.map(user => (
          <UserCard
            key={user.id}
            letter={getFirstChar(user.email)}
            name={getFirstChar(user.email)}
          />
        ))} */}
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ae" name="Aeron" />
        <UserCard letter="Be" name="Bella" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
      </UnorderedList>
    </ChannelSidebarContainer>
  );
}

export default ChannelSideBar;

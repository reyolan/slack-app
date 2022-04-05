import styles from "./channel-sidebar.module.css";
import ColumnContainer from "components/ui/containers/column-container";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "../user-card";
import Header from "components/ui/texts/header";
import { getFirstChar } from "utils/helpers";

function ChannelSideBar(/*{ isAdmin, users }*/) {
  return (
    <ColumnContainer className={styles.channelSideBar}>
      <Header level={2} className={styles.channelName}>
        Channel Name
      </Header>
      {/* {isAdmin && <Button type="button">Add Users</Button>} */}
      <Button type="button" className={styles.addBtn}>
        Add Users
      </Button>
      <Header level={2} className={styles.channelName}>
        Members
      </Header>
      <UnorderedList>
        {/* {users.map(user => (
          <UserCard
            key={user.id}
            letter={getFirstChar(user.email)}
            name={getFirstChar(user.email)}
          />
        ))} */}
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
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
        <UserCard letter="Ab" name="Abarth" />
      </UnorderedList>
    </ColumnContainer>
  );
}

export default ChannelSideBar;

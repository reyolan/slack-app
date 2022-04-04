import ColumnContainer from "components/ui/containers/column-container";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "../user-card";
import Header from "components/ui/texts/header";
import { getFirstChar } from "utils/helpers";

function ChannelSideBar({ isAdmin, users }) {
  return (
    <ColumnContainer>
      <Header level={2}>Channel Name</Header>
      {isAdmin && <Button type="button">Add Users</Button>}
      <Header level={2}>Users</Header>
      <UnorderedList>
        {users.map(user => (
          <UserCard
            key={user.id}
            letter={getFirstChar(user.email)}
            name={getFirstChar(user.email)}
          />
        ))}
      </UnorderedList>
    </ColumnContainer>
  );
}

export default ChannelSideBar;

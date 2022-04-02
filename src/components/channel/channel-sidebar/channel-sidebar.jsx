import ColumnContainer from "components/ui/containers/column-container";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "../user-card";
import { getFirstChar } from "utils/helpers";

function ChannelSideBar({ isAdmin, users }) {
  <ColumnContainer>
    <h1>Channel Name</h1>
    {isAdmin && <Button type="button">Add Users</Button>}
    <h2>Users</h2>
    <UnorderedList>
      {users.map(user => (
        <UserCard
          key={user.id}
          letter={getFirstChar(user.email)}
          name={user.email}
        />
      ))}
    </UnorderedList>
  </ColumnContainer>;
}

export default ChannelSideBar;

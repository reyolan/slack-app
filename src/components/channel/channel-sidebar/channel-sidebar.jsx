import styles from "./channel-sidebar.module.css";
import ColumnContainer from "components/ui/containers/column-container";
import RowContainer from "components/ui/containers/row-container";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import UnorderedList from "components/ui/unordered-list";
import UserCard from "./user-card";
import Header from "components/ui/texts/header";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import AddUserModal from "../add-user-modal";
import useModal from "hooks/useModal";

const NAMES = [
  "Abarth",
  "Aeron",
  "Bella",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
  "Abarth",
];

function ChannelSideBar(/*{ isAdmin, users }*/) {
  const { isOpen, toggleModal } = useModal(false);

  return (
    <>
      {isOpen && <AddUserModal users={NAMES} toggleModal={toggleModal} />}
      <ChannelSidebarContainer>
        <Header level={2}>Channel Name</Header>
        {/* {isAdmin && <Button type="button">Add Users</Button>} */}
        <Button
          type="button"
          onClick={toggleModal}
          className={styles.addMemberBtn}
        >
          Add Members
        </Button>
        {/* The button above shall be able to list all users 
      basically may modal tayo na input field then sa baba nun is yung list ng lahat ng users */}
        <Header level={2}>Members</Header>
        <UnorderedList>
          {NAMES.map((user, i) => {
            return (
              <li key={i}>
                <UserCard name={user} className={styles.userCard} />
              </li>
            );
          })}
        </UnorderedList>
      </ChannelSidebarContainer>
    </>
  );
}

export default ChannelSideBar;

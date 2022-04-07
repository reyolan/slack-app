import { useState } from "react";
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
import UserDetailCard from "../user-detail-card";
import useFilterUser from "hooks/useFilterUser";

const NAMES = [
  { name: "Abarth", id: 1 },
  { name: "Acura", id: 2 },
  { name: "Alfa Romeo", id: 3 },
  { name: "Aston Martin", id: 4 },
  { name: "Audi", id: 5 },
  { name: "Bentley", id: 6 },
  { name: "BMW", id: 7 },
  { name: "Bugatti", id: 8 },
  { name: "Buick", id: 9 },
  { name: "Cadillac", id: 10 },
];

function ChannelSideBar(/*{ isAdmin, users }*/) {
  const { isOpen, toggleModal } = useModal(false);
  const [clickedId, setClickedId] = useState(0);
  const { search, filteredUsers, setSearch } = useFilterUser(NAMES);

  const handleClick = id => {
    if (clickedId === id) {
      setClickedId(0);
      return;
    }
    setClickedId(id);
  };

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
        <InputField
          type="text"
          placeholder="Search members"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <Header level={2}>Members</Header>
        <UnorderedList>
          {filteredUsers.map(user => {
            return (
              <li key={user.id} onClick={() => handleClick(user.id)}>
                <UserCard name={user.name} className={styles.userCard} />
                {clickedId === user.id && (
                  <UserDetailCard
                    name={user.name}
                    className={styles.userDetailCard}
                  />
                )}
              </li>
            );
          })}
        </UnorderedList>
      </ChannelSidebarContainer>
    </>
  );
}

export default ChannelSideBar;

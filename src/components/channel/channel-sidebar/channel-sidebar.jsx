import { useEffect, useState } from "react";
import styles from "./channel-sidebar.module.css";
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
  { email: "Abarth", id: 1 },
  { email: "Acura", id: 2 },
  { email: "Alfa Romeo", id: 3 },
  { email: "Aston Martin", id: 4 },
  { email: "Audi", id: 5 },
  { email: "Bentley", id: 6 },
  { email: "BMW", id: 7 },
  { email: "Bugatti", id: 8 },
  { email: "Buick", id: 9 },
  { email: "Cadillac", id: 10 },
];

function ChannelSideBar({ channelName, isOwner }) {
  const { isOpen, toggleModal } = useModal(false);
  const [clickedId, setClickedId] = useState(0);
  const { search, filteredUsers, setSearch, setUsers } = useFilterUser();

  const handleClick = id => {
    if (clickedId === id) {
      setClickedId(0);
      return;
    }
    setClickedId(id);
  };

  useEffect(() => {});

  return (
    <>
      {isOpen && <AddUserModal toggleModal={toggleModal} />}
      <ChannelSidebarContainer>
        <Header level={2}>{channelName}</Header>
        {isOwner && (
          <Button
            type="button"
            onClick={toggleModal}
            className={styles.addMemberBtn}
          >
            Add Members
          </Button>
        )}
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
                <UserCard name={user.email} className={styles.userCard} />
                {clickedId === user.id && (
                  <UserDetailCard
                    name={user.email}
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

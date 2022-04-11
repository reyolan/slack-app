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

function ChannelSideBar({
  channelName = "",
  isOwner = false,
  channelId,
  ownerId,
  channelUsers,
  allUsers = [],
  setRefetchUsers,
}) {
  const { isOpen, toggleModal } = useModal(false);
  const [clickedId, setClickedId] = useState(0);
  const [usersAbleToAdd, setUsersAbleToAdd] = useState([]);
  const { search, filteredUsers, debounceSearch, setSearch } = useFilterUser(
    channelUsers,
    true
  );

  const handleClick = id => {
    if (clickedId === id) {
      setClickedId(-1);
      return;
    }
    setClickedId(id);
  };

  useEffect(() => {
    if (allUsers) {
      const usersAbleToAdd = allUsers.filter(
        user => !channelUsers.find(channelUser => channelUser.id === user.id)
      );

      setUsersAbleToAdd(usersAbleToAdd);
    }
  }, [allUsers, isOpen]);

  return (
    <>
      {isOpen && (
        <AddUserModal
          toggleModal={toggleModal}
          channelName={channelName}
          channelId={channelId}
          allUsers={usersAbleToAdd}
          setRefetchUsers={setRefetchUsers}
        />
      )}
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
          onChange={e => {
            setSearch(e.target.value);
            debounceSearch(e.target.value);
          }}
          value={search}
        />
        {/* <Header level={2}>Admin</Header>
        <UserCard
          name={getEmailUsername("example123@example.com")}
          className={styles.userCard}
        />
        {clickedId === 0 && (
          <div onClick={() => handleClick(0)}>
            <UserDetailCard
              email="example123@example.com"
              className={styles.userDetailCard}
            />
          </div>
        )} */}

        <Header level={2}>Members - {channelUsers.length}</Header>
        <UnorderedList>
          {filteredUsers.map(user => {
            return (
              <li key={user.id} onClick={() => handleClick(user.id)}>
                <UserCard name={user.uid} className={styles.userCard} />
                {clickedId === user.id && (
                  <UserDetailCard
                    name={user.uid}
                    id={user.id}
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

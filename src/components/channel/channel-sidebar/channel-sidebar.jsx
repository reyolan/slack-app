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
import UserDetailCard from "./user-card/user-detail-card";
import useFilterUser from "hooks/useFilterUser";
import LoadingContainer from "components/ui/containers/loading-container";

function ChannelSideBar({
  channelName,
  isOwner,
  channelId,
  ownerId,
  channelMembers,
  allUsers,
  refetchChannelDetails,
  isLoading,
}) {
  const { isOpen, toggleModal } = useModal(false);
  const [clickedId, setClickedId] = useState(-1);
  const [usersAbleToAdd, setUsersAbleToAdd] = useState([]);
  const [channelOwner, setChannelOwner] = useState({});
  const { search, filteredUsers, debounceSearch, setSearch } = useFilterUser(
    channelMembers,
    true
  );

  const handleClick = id => {
    console.log(id);
    if (clickedId === id) {
      setClickedId(-1);
      return;
    }
    setClickedId(id);
  };

  useEffect(() => {
    const usersAbleToAdd = allUsers.filter(
      user => !channelMembers.find(channelUser => channelUser.id === user.id)
    );
    setUsersAbleToAdd(usersAbleToAdd);
  }, [allUsers, channelMembers]);

  useEffect(() => {
    const channelOwner = allUsers.find(user => user.id === ownerId);
    setChannelOwner(channelOwner);
  }, [channelId]);

  return (
    <>
      {isOpen && (
        <AddUserModal
          toggleModal={toggleModal}
          channelName={channelName}
          channelId={channelId}
          usersAbleToAdd={usersAbleToAdd}
          refetchChannelDetails={refetchChannelDetails}
        />
      )}
      <ChannelSidebarContainer>
        {isLoading ? (
          <>
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
            <Header level={2}>Owner</Header>
            <div onClick={() => handleClick(channelOwner.id)}>
              <UserCard name={channelOwner.uid} className={styles.userCard} />

              {clickedId === channelOwner.id && (
                <UserDetailCard name={channelOwner.uid} id={channelOwner.id} />
              )}
            </div>

            <Header level={2}>Members - {channelMembers.length}</Header>
            <UnorderedList>
              {filteredUsers.map(user => {
                return (
                  <li key={user.id}>
                    <div onClick={() => handleClick(user.id)}>
                      <UserCard name={user.uid} className={styles.userCard} />
                      {clickedId === user.id && (
                        <UserDetailCard name={user.uid} id={user.id} />
                      )}
                    </div>
                  </li>
                );
              })}
            </UnorderedList>
          </>
        ) : (
          <LoadingContainer className={styles.loadingContainer} />
        )}
      </ChannelSidebarContainer>
    </>
  );
}

export default ChannelSideBar;

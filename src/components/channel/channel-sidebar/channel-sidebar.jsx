import { useEffect, useState } from "react";
import styles from "./channel-sidebar.module.css";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import Header from "components/ui/texts/header";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import AddUserModal from "../add-user-modal";
import useModal from "hooks/useModal";
import useFilterUser from "hooks/useFilterUser";
import LoadingContainer from "components/ui/containers/loading-container";
import UsersList from "./users-list";

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
  const [usersAbleToAdd, setUsersAbleToAdd] = useState([]);
  const [channelOwner, setChannelOwner] = useState({});
  const { search, filteredUsers, debounceSearch, setSearch } = useFilterUser(
    channelMembers,
    true
  );

  useEffect(() => {
    const usersAbleToAdd = allUsers.filter(
      user => !channelMembers.find(channelUser => channelUser.id === user.id)
    );
    setUsersAbleToAdd(usersAbleToAdd);
  }, [allUsers, channelMembers, isOpen]);

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

            <UsersList
              filteredUsers={filteredUsers}
              channelOwner={channelOwner}
              numberOfMembers={channelMembers.length}
            />
          </>
        ) : (
          <LoadingContainer className={styles.loadingContainer} />
        )}
      </ChannelSidebarContainer>
    </>
  );
}

export default ChannelSideBar;

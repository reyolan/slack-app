import { useEffect, useState, useContext, useMemo } from "react";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import styles from "./channel-sidebar.module.css";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import Header from "components/ui/texts/header";
import ChannelSidebarContainer from "components/ui/containers/channel-sidebar-container";
import AddUserModal from "../add-user-modal";
import useModal from "hooks/use-modal";
import useFilterUser from "hooks/use-filter-user";
import UsersList from "./users-list";

function ChannelSidebar({ channelResponse }) {
  const { loggedInId } = useContext(AuthContext);
  const { allUsers } = useContext(DataContext);
  const [isOwner, setIsOwner] = useState(false);
  const { isOpen, toggleModal } = useModal(false);

  const channelMembers = useMemo(() => {
    if (channelResponse.channel_members.length > 0) {
      return allUsers.filter(
        user =>
          channelResponse.channel_members.some(
            member => member.user_id === user.id
          ) && user.id !== channelResponse.owner_id
      );
    }
  }, [channelResponse.channel_members, channelResponse.owner_id, allUsers]);

  const { search, filteredUsers, setSearch } = useFilterUser(channelMembers);

  const usersAbleToAdd = useMemo(() => {
    if (isOpen) {
      return allUsers.filter(
        user => !channelMembers.find(channelUser => channelUser.id === user.id)
      );
    }
  }, [isOpen, channelMembers, allUsers]);

  const channelOwner = useMemo(
    () => allUsers.find(user => user.id === channelResponse.owner_id),
    [channelResponse.owner_id, allUsers]
  );

  useEffect(() => {
    if (channelResponse.owner_id === +loggedInId) {
      setIsOwner(true);
      return;
    }
    setIsOwner(false);
  }, [loggedInId, channelResponse.owner_id]);

  return (
    <>
      {isOpen && (
        <AddUserModal
          toggleModal={toggleModal}
          channelResponse={channelResponse}
          usersAbleToAdd={usersAbleToAdd}
        />
      )}
      <ChannelSidebarContainer className={styles.channelSidebar}>
        <Header level={2}>{channelResponse.name}</Header>
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

        <UsersList
          filteredUsers={filteredUsers}
          channelOwner={channelOwner}
          numberOfMembers={channelMembers.length}
        />
      </ChannelSidebarContainer>
    </>
  );
}

export default ChannelSidebar;

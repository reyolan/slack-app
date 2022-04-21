import styles from "./add-user-modal.module.css";
import UnorderedList from "components/ui/unordered-list";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import UserCard from "../channel-sidebar/user-card";
import RowContainer from "components/ui/containers/row-container";
import Modal from "components/ui/modal";
import InputField from "components/ui/input-field";
import useFilterUser from "hooks/use-filter-user";
import useAxiosPost from "hooks/use-axios-post";

function AddUserModal({
  toggleModal,
  channelResponse,
  usersAbleToAdd,
  refetchChannelDetails,
}) {
  const { search, filteredUsers, searchUsers } = useFilterUser(usersAbleToAdd);
  const { isPosting, postRequest } = useAxiosPost("channel/add_member");

  const addUser = member_id => {
    postRequest({ id: channelResponse.id, member_id }).then(res => {
      if (res.response.data.data) {
        refetchChannelDetails();
        return;
      }
    });
  };

  return (
    <Modal toggleModal={toggleModal}>
      <div className={styles.headerInputContainer}>
        <Header level={2}>Invite users to {channelResponse.name}</Header>
        <InputField
          type="text"
          placeholder="Search users"
          onChange={e => searchUsers(e.target.value)}
          value={search}
          className={styles.inputContainer}
        />
      </div>

      <UnorderedList className={styles.userListModal}>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <RowContainer className={styles.addContainerModal}>
              <UserCard name={user.uid} id={user.id} />
              <Button
                type="button"
                className={styles.addBtn}
                onClick={() => addUser(user.id)}
              >
                Add
              </Button>
            </RowContainer>
          </li>
        ))}
      </UnorderedList>
    </Modal>
  );
}

export default AddUserModal;

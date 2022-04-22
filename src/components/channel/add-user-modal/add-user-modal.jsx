import styles from "./add-user-modal.module.css";
import UnorderedList from "components/ui/unordered-list";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import UserCard from "../channel-sidebar/user-card";
import RowContainer from "components/ui/containers/row-container";
import Modal from "components/ui/modal";
import InputField from "components/ui/input-field";
import useFilterUser from "hooks/use-filter-user";
import usePostRequest from "hooks/use-post-request";
import useMutation from "hooks/use-mutation";

function AddUserModal({ toggleModal, channelResponse, usersAbleToAdd }) {
  const { search, filteredUsers, setSearch } = useFilterUser(
    usersAbleToAdd,
    false,
    true
  );
  const postRequest = usePostRequest("channel/add_member");
  const revalidate = useMutation();

  const addUser = member_id => {
    const data = { id: channelResponse.id, member_id };
    postRequest(data).then(res => {
      if (res.response.data.data) {
        revalidate(`channels/${channelResponse.id}`);
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
          onChange={e => setSearch(e.target.value)}
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

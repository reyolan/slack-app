import { useEffect, useState, useContext } from "react";
import styles from "./add-user-modal.module.css";
import UnorderedList from "components/ui/unordered-list";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import UserCard from "../channel-sidebar/user-card";
import RowContainer from "components/ui/containers/row-container";
import Modal from "components/ui/modal";
import InputField from "components/ui/input-field";
import useFilterUser from "hooks/useFilterUser";
import { AuthContext } from "context/auth-context";
import useAxiosGet from "hooks/useAxiosGet";
import useAxiosPost from "hooks/useAxiosPost";
import { getEmailUsername } from "utils/helpers";

function AddUserModal({ toggleModal, channelName, channelId, allUsers }) {
  const { loginHeaders } = useContext(AuthContext);
  const { search, filteredUsers, debounceSearch, setSearch } =
    useFilterUser(allUsers);
  const { isPosting, postRequest } = useAxiosPost();
  // dito mo ilagay yung user data kasi dito lang naman tayo maglilist ng users

  const addUser = member_id => {
    postRequest(
      "channel/add_member",
      { id: channelId, member_id },
      loginHeaders
    ).then(res => console.log(res));
  };

  return (
    <Modal className={styles.modal} toggleModal={toggleModal}>
      <div className={styles.headerInputContainer}>
        <Header level={2}>Invite users to {channelName}</Header>
        <InputField
          type="text"
          placeholder="Search users"
          onChange={e => {
            setSearch(e.target.value);
            debounceSearch(e.target.value);
          }}
          value={search}
          className={styles.inputContainer}
        />
      </div>

      <UnorderedList className={styles.userListModal}>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <RowContainer className={styles.addContainerModal}>
              <UserCard email={getEmailUsername(user.uid)} id={user.id} />
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

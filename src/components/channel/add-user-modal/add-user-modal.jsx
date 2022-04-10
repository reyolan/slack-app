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
import { getRequest } from "services/axios-resolver";
import useAxiosGet from "hooks/useAxiosGet";
import { getEmailUsername } from "utils/helpers";

function AddUserModal({ toggleModal }) {
  const { loginHeaders } = useContext(AuthContext);
  const { search, filteredUsers, debounceSearch, setSearch, setUsers } =
    useFilterUser();
  const { response, error, isLoading } = useAxiosGet("users", loginHeaders);
  // dito mo ilagay yung user data kasi dito lang naman tayo maglilist ng users

  useEffect(() => {
    if (response) {
      setUsers(response.data.data);
    }
  }, [response]);

  return (
    <Modal className={styles.modal} toggleModal={toggleModal}>
      <div className={styles.headerInputContainer}>
        <Header level={2}>Invite users to Channel Name</Header>
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
      {isLoading ? (
        <p>LOADINGG!!</p>
      ) : (
        <UnorderedList className={styles.userListModal}>
          {filteredUsers.map((user, i) => (
            <li key={user.id}>
              <RowContainer className={styles.addContainerModal}>
                <UserCard name={user.uid} />
                <Button type="button" className={styles.addBtn}>
                  Add
                </Button>
              </RowContainer>
            </li>
          ))}
        </UnorderedList>
      )}
    </Modal>
  );
}

export default AddUserModal;

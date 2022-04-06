import { useEffect, useState } from "react";
import styles from "./add-user-modal.module.css";
import UnorderedList from "components/ui/unordered-list";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import UserCard from "../channel-sidebar/user-card";
import RowContainer from "components/ui/containers/row-container";
import Modal from "components/ui/modal";
import InputField from "components/ui/input-field";

function AddUserModal({ users, toggleModal }) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user => user.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <Modal className={styles.modal} toggleModal={toggleModal}>
      <div className={styles.headerInputContainer}>
        <Header level={2}>Invite users to Channel Name</Header>
        <InputField
          type="text"
          placeholder="Search users"
          onChange={e => setSearch(e.target.value)}
          value={search}
          className={styles.inputContainer}
        />
      </div>
      <UnorderedList className={styles.userListModal}>
        {filteredUsers.map((user, i) => (
          <li key={i}>
            <RowContainer className={styles.addContainerModal}>
              <UserCard name={user} />
              <Button type="button" className={styles.addBtn}>
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

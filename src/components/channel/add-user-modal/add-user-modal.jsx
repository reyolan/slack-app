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

function AddUserModal({ users, toggleModal }) {
  const { search, filteredUsers, setSearch } = useFilterUser(users);
  // const [users, setUsers] = useState([]);
  const { loginHeaders } = useContext(AuthContext);
  // dito mo ilagay yung user data kasi dito lang naman tayo maglilist ng users

  useEffect(() => {
    getRequest("users", loginHeaders).then(res => console.log(res));
    //pag nag-add ka na ng users, fetch na ulit para magbago yung list ng users so mababago yung list
    //gawa function dito na kapag nakapag-add, re-fetch tayo ng users para maupdate yung list
  }, []);

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
              <UserCard name={user.name} />
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

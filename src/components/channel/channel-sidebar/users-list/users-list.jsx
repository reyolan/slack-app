import { useState } from "react";
import styles from "./users-list.module.css";
import UserCard from "../user-card";
import UserDetailCard from "../user-detail-card";
import UnorderedList from "components/ui/unordered-list";
import Header from "components/ui/texts/header";

function UsersList({ filteredUsers, channelOwner, numberOfMembers }) {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = id => {
    if (clickedId === id) {
      setClickedId(-1);
      return;
    }
    setClickedId(id);
  };

  return (
    <>
      <Header level={2}>Owner</Header>
      <div className={clickedId === channelOwner.id ? styles.active : ""}>
        <div onClick={() => handleClick(channelOwner.id)}>
          <UserCard name={channelOwner.uid} className={styles.userCard} />
        </div>

        {clickedId === channelOwner.id && (
          <UserDetailCard name={channelOwner.uid} id={channelOwner.id} />
        )}
      </div>

      <Header level={2}>Members - {numberOfMembers}</Header>
      <UnorderedList>
        {filteredUsers.map(user => {
          return (
            <li
              key={user.id}
              className={clickedId === user.id ? styles.active : ""}
            >
              <div onClick={() => handleClick(user.id)}>
                <UserCard name={user.uid} className={styles.userCard} />
              </div>
              <div className={styles.userCardDetailContainer}>
                {clickedId === user.id && (
                  <UserDetailCard name={user.uid} id={user.id} />
                )}
              </div>
            </li>
          );
        })}
      </UnorderedList>
    </>
  );
}

//lipat natin yung memberlist dito ng channel sidebar
export default UsersList;

import { useContext } from "react";
import styles from "./direct-messages-list.module.css";
import Header from "components/ui/texts/header";
import UnorderedList from "components/ui/unordered-list";
import { Link } from "react-router-dom";
import UserCard from "components/channel/channel-sidebar/user-card";
import { DataContext } from "context/data-context";
import { useParams, useNavigate } from "react-router-dom";

function DirectMessagesList() {
  const { directMessages, setDirectMessages } = useContext(DataContext);
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleDelete = id => {
    const filterMessages = directMessages.filter(message => message.id !== id);
    setDirectMessages(filterMessages);

    if (!filterMessages.length) {
      navigate("/channels/me");
    }
  };

  return (
    <>
      <Header level={2}>Direct Messages</Header>
      <UnorderedList className={styles.directMessageList}>
        {directMessages.map(directMessage => (
          <li
            key={directMessage.id}
            className={`${styles.directMessageCard} ${
              directMessage.id === +userId ? styles.active : ""
            }`}
          >
            <Link to={`/channels/me/${directMessage.id}`}>
              <UserCard name={directMessage.uid} id={directMessage.id} />
            </Link>
            <i
              className="las la-times"
              onClick={() => handleDelete(directMessage.id)}
            />
          </li>
        ))}
      </UnorderedList>
    </>
  );
}

export default DirectMessagesList;

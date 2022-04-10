import { useContext } from "react";
import styles from "./message-container.module.css";
import { AuthContext } from "context/auth-context";
import ColumnContainer from "components/ui/containers/column-container";
import MessageCard from "../message-card";
import { useEffect } from "react";
import useAxiosPost from "hooks/useAxiosPost";

function MessageContainer() {
  // const { loginHeaders } = useContext(AuthContext);
  const { isPosting, postRequest } = useAxiosPost();

  // useEffect(() => {
  //   postRequest("messages", {receiver_id: });
  // }, []);
  return (
    <ColumnContainer className={styles.messageContainer}>
      <MessageCard name="Abarth" message="Hello" />
      <MessageCard
        name="Abarth"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et erat ipsum. Nam molestie velit nibh, at ultrices mauris bibendum in. Vivamus tempus magna ac malesuada tempus. Nulla at iaculis nisi, eget viverra lectus. Ut egestas porttitor augue, ac mollis libero consectetur et. Cras rhoncus nulla vitae arcu mollis pulvinar. Nulla convallis arcu sit amet est molestie, eget lacinia quam convallis. Cras placerat sem at dui euismod varius."
      />
    </ColumnContainer>
  );
}

export default MessageContainer;

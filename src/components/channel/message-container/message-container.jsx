import styles from "./message-container.module.css";
import ColumnContainer from "components/ui/containers/column-container";
import MessageCard from "../message-card";

function MessageContainer() {
  return (
    <ColumnContainer className={styles.messageContainer}>
      <MessageCard name="Abarth" message="Hello" />
      <MessageCard
        name="Abarth"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et erat ipsum. Nam molestie velit nibh, at ultrices mauris bibendum in. Vivamus tempus magna ac malesuada tempus. Nulla at iaculis nisi, eget viverra lectus. Ut egestas porttitor augue, ac mollis libero consectetur et. Cras rhoncus nulla vitae arcu mollis pulvinar. Nulla convallis arcu sit amet est molestie, eget lacinia quam convallis. Cras placerat sem at dui euismod varius."
      />
      <MessageCard
        name="Bella"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et erat ipsum. Nam molestie velit nibh, at ultrices mauris bibendum in. Vivamus tempus magna ac malesuada tempus. Nulla at iaculis nisi, eget viverra lectus. Ut egestas porttitor augue, ac mollis libero consectetur et. Cras rhoncus nulla vitae arcu mollis pulvinar. Nulla convallis arcu sit amet est molestie, eget lacinia quam convallis. Cras placerat sem at dui euismod varius."
      />
      <MessageCard
        name="Dom"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et erat ipsum. Nam molestie velit nibh, at ultrices mauris bibendum in. Vivamus tempus magna ac malesuada tempus. Nulla at iaculis nisi, eget viverra lectus. Ut egestas porttitor augue, ac mollis libero consectetur et. Cras rhoncus nulla vitae arcu mollis pulvinar. Nulla convallis arcu sit amet est molestie, eget lacinia quam convallis. Cras placerat sem at dui euismod varius."
      />
      <MessageCard
        name="Monica"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et erat ipsum. Nam molestie velit nibh, at ultrices mauris bibendum in. Vivamus tempus magna ac malesuada tempus. Nulla at iaculis nisi, eget viverra lectus. Ut egestas porttitor augue, ac mollis libero consectetur et. Cras rhoncus nulla vitae arcu mollis pulvinar. Nulla convallis arcu sit amet est molestie, eget lacinia quam convallis. Cras placerat sem at dui euismod varius."
      />
      <MessageCard
        name="Joy"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et erat ipsum. Nam molestie velit nibh, at ultrices mauris bibendum in. Vivamus tempus magna ac malesuada tempus. Nulla at iaculis nisi, eget viverra lectus. Ut egestas porttitor augue, ac mollis libero consectetur et. Cras rhoncus nulla vitae arcu mollis pulvinar. Nulla convallis arcu sit amet est molestie, eget lacinia quam convallis. Cras placerat sem at dui euismod varius."
      />
      <MessageCard
        name="Daniel"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et erat ipsum. Nam molestie velit nibh, at ultrices mauris bibendum in. Vivamus tempus magna ac malesuada tempus. Nulla at iaculis nisi, eget viverra lectus. Ut egestas porttitor augue, ac mollis libero consectetur et. Cras rhoncus nulla vitae arcu mollis pulvinar. Nulla convallis arcu sit amet est molestie, eget lacinia quam convallis. Cras placerat sem at dui euismod varius."
      />
    </ColumnContainer>
  );
}

export default MessageContainer;

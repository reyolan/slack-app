import { useState, useContext } from "react";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import styles from "./add-channel-modal.module.css";
import Modal from "components/ui/modal";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import InputField from "components/ui/input-field";
import useAxiosPost from "hooks/useAxiosPost";

function AddChannelModal({ toggleModal }) {
  const { loginHeaders } = useContext(AuthContext);
  const { fetchChannels } = useContext(DataContext);
  const [channelName, setChannelName] = useState("");
  const { isPosting, postRequest } = useAxiosPost();

  const handleSubmit = () => {
    postRequest(
      "channels",
      {
        name: channelName,
        user_ids: [],
      },
      loginHeaders
    ).then(res => {
      console.log(res);
      //create error if same channel name has already been taken
      fetchChannels();
    });
  };
  return (
    <Modal toggleModal={toggleModal} className={styles.addChannelModal}>
      <Header level={2}>Create a channel</Header>
      <InputField
        name="channel"
        value={channelName}
        onChange={e => setChannelName(e.target.value)}
        placeholder="Channel Name"
        className={styles.inputChannel}
      />
      <Button
        type="button"
        onClick={() => {
          handleSubmit();
          toggleModal();
        }}
        className={styles.addChannelBtn}
      >
        Create channel
      </Button>
    </Modal>
  );
}

export default AddChannelModal;

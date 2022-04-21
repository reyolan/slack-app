import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "context/data-context";
import styles from "./add-channel-modal.module.css";
import Modal from "components/ui/modal";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import InputField from "components/ui/input-field";
import ErrorText from "components/ui/texts/error-text";
import useAxiosPost from "hooks/use-axios-post";

function AddChannelModal({ toggleModal }) {
  const { refetchChannelList } = useContext(DataContext);
  const [channelName, setChannelName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const { isPosting, postRequest } = useAxiosPost("channels");
  const navigate = useNavigate();

  const handleSubmit = () => {
    postRequest({
      name: channelName,
      user_ids: [],
    }).then(res => {
      if (res.response.data.data) {
        toggleModal();
        refetchChannelList();
        navigate(`/channels/${res.response.data.data.id}`);
        return;
      }
      setStatusMessage(res.response.data.errors[0]);
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
      <ErrorText>{statusMessage}</ErrorText>
      <Button
        type="button"
        onClick={() => handleSubmit()}
        className={styles.addChannelBtn}
      >
        Create channel
      </Button>
    </Modal>
  );
}

export default AddChannelModal;

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "context/data-context";
import styles from "./add-channel-modal.module.css";
import Modal from "components/ui/modal";
import Header from "components/ui/texts/header";
import Button from "components/ui/button";
import InputField from "components/ui/input-field";
import ErrorText from "components/ui/texts/error-text";
import usePostRequest from "hooks/use-post-request";
import useMutation from "hooks/use-mutation";

function AddChannelModal({ toggleModal }) {
  const [channelName, setChannelName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const { isPosting, postRequest } = usePostRequest("channels");
  const navigate = useNavigate();
  const revalidate = useMutation();

  const handleSubmit = () => {
    postRequest({
      name: channelName,
      user_ids: [],
    }).then(res => {
      if (res.response.data.errors.length || res.error) {
        setStatusMessage(res.response.data.errors[0]);
        throw new Error(res.response.data.errors[0]);
      }

      toggleModal();
      revalidate("channels");
      navigate(`/channels/${res.response.data.data.id}`);
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

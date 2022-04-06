import { useState } from "react";

function useModal(initialState) {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleModal = () => setIsOpen(!isOpen);

  return { isOpen, toggleModal };
}

export default useModal;

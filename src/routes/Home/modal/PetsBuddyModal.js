import React from "react";

import { Modal } from "semantic-ui-react";

const PetsBuddyModal = ({ open, close }) => {
  return (
    <Modal className="petsbuddy_modal" open={open}>
      <div className="close_modal" onClick={close}>
        X
      </div>
      <li>A modal</li>
      <li>Items in a modal</li>
    </Modal>
  );
};

export default PetsBuddyModal;

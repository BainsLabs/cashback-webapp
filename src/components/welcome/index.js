import React from 'react';
import Modal from 'react-responsive-modal';

const WelcomeModal = (props) => {
  const { open, onClose } = props;
  return (
    <>
      <Modal open={props.open} onClose={props.onClose}>
        <h1>WelcomeModal</h1>
      </Modal>
    </>
  );
};

export default WelcomeModal;

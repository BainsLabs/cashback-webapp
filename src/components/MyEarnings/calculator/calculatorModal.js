import React from 'react';

import Modal from 'react-responsive-modal';
import CalculatorForm from './CalculatorForm';

const style = {
  modal: {
    backgroundColor: '#96c1eb',
  },
};

const CalculatorModal = (props) => {
  const { open, close } = props;
  return (
    <>
      <Modal open={open} styles={style} onClose={close}>
        <CalculatorForm />
      </Modal>
    </>
  );
};

export default CalculatorModal;

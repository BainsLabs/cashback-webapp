import React from "react";

import Modal from "react-responsive-modal";
import CalculatorForm from "./CalculatorForm";

const style = {
  modal: {
    backgroundColor: "#d7d7d7"
  }
};

const CalculatorModal = props => (
  <>
    <Modal open={props.open} styles={style} onClose={props.close}>
      <CalculatorForm />
    </Modal>
  </>
);

export default CalculatorModal;

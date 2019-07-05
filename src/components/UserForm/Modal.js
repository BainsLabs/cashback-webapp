import React, { Component } from "react";
import {
  ModalBody,
  ModalTitle,
  Modal,
  ModalFooter,
  Button,
  Row,
  Col
} from "react-bootstrap";
import { connect } from "react-redux";
import SignIn from "components/UserForm/SignIn";
import SignUp from "components/UserForm/SignUp";

class UserModal extends Component {
  render() {
    const { name, open } = this.props.userModal || {};
    return (
      <Modal
        show={open}
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal__header" />
        <ModalBody className="container usermodal__container">
          <div className="container">
            <Row>
              <Col md={6}>Content</Col>
              <Col md={6}>{name == "signin" ? <SignIn /> : <SignUp />}</Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { userModal: state.UserModal.path };
};

export default connect(
  mapStateToProps,
  null
)(UserModal);

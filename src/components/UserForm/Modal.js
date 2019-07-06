import React, { Component } from "react";
import {
  Row,
  Col
} from "react-bootstrap";
import Modal from "react-responsive-modal"
import { connect } from "react-redux";
import SignIn from "components/UserForm/SignIn";
import SignUp from "components/UserForm/SignUp";
import LogoIcon from "static/icons-images/logo-icon.png"
import SignUpContent from "components/UserForm/SignUp/SignUpContent"
import SignInContent from "components/UserForm/SignIn/SignInContent"


class UserModal extends Component {
  render() {
    const { name, open } = this.props.userModal || {};
    return (
      <Modal
        open={open}
        onClose={this.props.onHide}
        center
        blockScroll={true}
      >
             <Row>
              <Col md={6} className="usermodal__content">
              <p>
              <img src={LogoIcon} className="mx-auto d-block usermodal__logo"/>
                <p className="text-center userModal__text"><strong className="userModal__brandName">6Degrees.CASH</strong><br />Friends Shopping Network</p>

              </p>
              {name == "signin" ? <SignInContent label="SignUp"/> :<SignUpContent label="SignIn"/>}

              </Col>
              <Col md={6} className="usermodal__form">
              <img src={LogoIcon} className="mx-auto d-block usermodal__logo"/>
              {name == "signin" ? <SignIn /> : <SignUp />}
              </Col>
            </Row>
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

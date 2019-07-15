/* eslint-disable no-nested-ternary */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import SignIn from 'components/UserForm/SignIn';
import leftImage from 'static/icons-images/bg.png';
import Banner from 'components/common/Banner';
import SignUp from 'components/UserForm/SignUp';
import LogoIcon from 'static/icons-images/logo-icon.png';
import SignUpContent from 'components/UserForm/SignUp/SignUpContent';
import SignInContent from 'components/UserForm/SignIn/SignInContent';
import ForgotPassword from 'components/UserForm/ForgotPassword';
import brandLogo from 'static/icons-images/signup-page-logo.png';

const modalStyles = {
  modal: {
    padding: 0,
    borderRadius: '2rem',
  },
  closeButton: {
    borderRadius: '2rem',
  },
};

const UserModal = (props) => {
  const { userModal, onHide } = props;
  const { name, open } = userModal;
  return (
    <Modal open={open} onClose={onHide} center blockScroll styles={modalStyles}>
      <Row>
        <Col md={5} className="no-padding">
          <Banner imgSrc={leftImage} className="auth-modal__left-side" textPosition="center">
            <img src={brandLogo} alt="imageLogo" className="mx-auto d-block" />
            {name === 'signin' || name === 'forgot' ? (
              <SignInContent label="SIGN UP" />
            ) : (
              <SignUpContent label="SIGN IN" />
            )}
          </Banner>
        </Col>
        <Col md={6} className="usermodal__form">
          <img src={LogoIcon} className="mx-auto d-block usermodal__logo" />
          {name == 'signin' ? <SignIn /> : name === 'signup' ? <SignUp /> : <ForgotPassword />}
        </Col>
      </Row>
    </Modal>
  );
};

const mapStateToProps = state => ({ userModal: state.UserModal.path });

export default connect(
  mapStateToProps,
  null,
)(UserModal);

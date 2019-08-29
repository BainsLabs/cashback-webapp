/* eslint-disable no-nested-ternary */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { cloudfrontUrl } from 'utils/uitility';
import SignIn from 'components/UserForm/SignIn';
import SignUp from 'components/UserForm/SignUp';
import SignUpContent from 'components/UserForm/SignUp/SignUpContent';
import SignInContent from 'components/UserForm/SignIn/SignInContent';
import ForgotPassword from 'components/UserForm/ForgotPassword';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const modalStyles = {
  modal: {
    padding: 0,
    borderRadius: '2rem',
    position: 'relative',
    width: '100%',
  },
  closeButton: {
    borderRadius: '2rem',
    position: 'absolute',
  },
};

const StyledDiv = styled(Col)`
  text-align: center;
`;

const UserModal = (props) => {
  const { userModal, onHide } = props;
  const { name, open } = userModal;
  const language = localStorage.getItem('country');
  return (
    <Modal
      open={open}
      onClose={onHide}
      center
      blockScroll
      styles={modalStyles}
      closeOnOverlayClick={false}
    >
      {name === 'welcome' ? (
        <img
          src={
            language === 'en-US'
              ? cloudfrontUrl('images/cashback/welcome-screen(eng).png')
              : cloudfrontUrl('images/cashback/welcome-screen(chi).png')
          }
          alt="welcome to 6degrees"
          height="600px"
          width="800px"
        />
      ) : (
        <Row>
          <StyledDiv md={5} className="no-padding left-bg auth-modal__left-side">
            <div className="bg-img">
              {/* <Banner imgSrc={leftImage} className="auth-modal__left-side" textPosition="center"> */}
              <img
                src={
                  language === 'en-US'
                    ? cloudfrontUrl('images/login-signup/left-logo.png')
                    : cloudfrontUrl('images/login-signup/logo-icon(leftchinese).png')
                }
                alt="imageLogo"
                className="mx-auto d-block"
              />
              {name === 'signin' || name === 'forgot' ? (
                <SignInContent SignUpContent label={<FormattedMessage id="data.signUp" />} />
              ) : (
                <SignUpContent label={<FormattedMessage id="data.signIn" />} />
              )}
              {/* </Banner> */}
            </div>
          </StyledDiv>
          <Col md={6} className="usermodal__form auth-modal__right-side">
            {console.log(name, 'nameeee')}
            <img
              src={cloudfrontUrl('images/login-signup/logo-icon(right).png')}
              alt="logo"
              className="mx-auto d-block usermodal__logo"
            />
            {name === 'signin' ? <SignIn /> : name === 'signup' ? <SignUp /> : <ForgotPassword />}
          </Col>
        </Row>
      )}
    </Modal>
  );
};

const mapStateToProps = state => ({ userModal: state.UserModal });

export default connect(
  mapStateToProps,
  null,
)(UserModal);

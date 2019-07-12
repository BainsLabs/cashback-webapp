import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { connect } from 'react-redux';
import DropdownComponent from 'components/common/DropDown';
import { faMapMarkerAlt, faSortDown } from '@fortawesome/fontawesome-free-solid';
import { SignInModal, SignUpModal, CloseModal } from 'redux/actions/modalActions';
import { isLogout } from 'redux/actions/userActions';

const MobileNav = (props) => {
  const { user } = props;
  console.log(props.closeMenu, 'propppp');
  return (
    <Container>
      <Row>
        <Col>
          <Input placeholder="Search" autoFocus className="top-navbar__search" />
          <DropdownComponent
            icon={faMapMarkerAlt}
            iconLeft
            label="Select Country"
            className="top-navbar__select-country text-center"
          />
          <DropdownComponent
            icon={faSortDown}
            label="Language"
            className="top-navbar__select-language"
          />
          {user.authenticated ? (
            <Col>
              <button type="button" className="top-navbar__join-btn">
                Logout
              </button>
            </Col>
          ) : (
            <Col>
              <button
                type="button"
                className="top-navbar__login-btn"
                onClick={() => props.SignInModal()}
              >
                Login
              </button>
              <span className="text-white">/</span>
              <button
                type="button"
                className="top-navbar__join-btn"
                onClick={() => {
                  props.closeMenu();
                  props.SignUpModal();
                }}
              >
                JOIN FREE
              </button>
            </Col>
          )}
        </Col>
      </Row>
    </Container>
  );
};
const mapDispatchToProps = {
  SignInModal,
  SignUpModal,
  CloseModal,
  isLogout,
};

const mapStateToProps = state => ({
  user: state.User,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MobileNav);

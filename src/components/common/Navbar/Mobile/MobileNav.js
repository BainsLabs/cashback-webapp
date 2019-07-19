/* eslint-disable no-shadow */
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { connect } from 'react-redux';
import DropdownComponent from 'components/common/DropDown';
import { faMapMarkerAlt, faSortDown } from '@fortawesome/fontawesome-free-solid';
import { modalState } from 'redux/actions/modalActions';
import { isLogout } from 'redux/actions/userActions';
import { Link } from 'react-router-dom';

const MobileNav = (props) => {
<<<<<<< HEAD
  const { user, modalState } = props;
=======
  console.log(props, 'props');
  const { user } = props;
>>>>>>> add secondar nav in mobile view
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
                onClick={() => modalState('signin')}
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
          <ul className="mobilenav__list">
            <li>
              <Link to="/categories">Shop Categories</Link>
            </li>
            <li>
              <Link to="/how-cashback-works">How Cashback Works</Link>
            </li>
            <li>
              <Link to="/refer-friend">Refer a Friend</Link>
            </li>
            <li>
              <Link to="/categories">VIP Beifits</Link>
            </li>

            {user.authenticated ? (
              <li>
                <Link to="/categories">My Account</Link>
              </li>
            ) : null}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
const mapDispatchToProps = {
  modalState,
  isLogout,
};

const mapStateToProps = state => ({
  user: state.User,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MobileNav);

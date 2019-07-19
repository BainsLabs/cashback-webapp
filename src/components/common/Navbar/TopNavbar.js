/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import logo from 'static/icons-images/logo.png';
import Input from 'components/common/inputField';
import { connect } from 'react-redux';
import DropdownComponent from 'components/common/DropDown';
import { faMapMarkerAlt, faSortDown } from '@fortawesome/fontawesome-free-solid';
import { modalState } from 'redux/actions/modalActions';
import { isLogout } from 'redux/actions/userActions';
import UserModal from 'components/UserForm/Modal';
import { Link } from 'react-router-dom';
import { country, language } from 'constants/dropdown';

class TopNavbar extends Component {
  ModalOpen = async (e) => {
    e.preventDefault();
    const { modalState } = this.props;
    const modalType = e === 'SignIn' ? modalState('signin') : modalState('signup');
    await modalState(modalType);
  };

  LogOut = async () => {
    const { isLogout } = this.props;
    await Auth.signOut();
    await isLogout();
  };

  ModalClose = async () => {
    const { modalState } = this.props;
    await modalState(null);
  };

  render() {
    const { user, content } = this.props;
    return (
      <section className="top-navbar">
        <div className="container top-navbar__container">
          <Row>
            <Col lg={3}>
              <Link to="/">
                <img src={logo} width="250rem" alt="logo" />
              </Link>
            </Col>
            <Col lg={5}>
              <Row>
                <Col lg={8}>
                  <Input placeholder="Search" autoFocus className="top-navbar__search" />
                </Col>
                <Col lg={4}>
                  <DropdownComponent
                    icon={faMapMarkerAlt}
                    iconLeft
                    menu={country}
                    label="Select Country"
                    className="top-navbar__select-country"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <Row>
                <Col lg={4}>
                  <DropdownComponent
                    icon={faSortDown}
                    label="Language"
                    menu={language}
                    className="top-navbar__select-language"
                    languageChange={content}
                  />
                </Col>
                {user.authenticated ? (
                  <Col>
                    <button
                      type="button"
                      className="top-navbar__join-btn"
                      onClick={e => this.LogOut(e)}
                    >
                      Logout
                    </button>
                  </Col>
                ) : (
                  <Col>
                    <button
                      className="top-navbar__login-btn"
                      type="button"
                      onClick={() => this.ModalOpen('SignIn')}
                    >
                      Login
                    </button>
                    <span className="text-white">/</span>
                    <button
                      className="top-navbar__join-btn"
                      type="button"
                      onClick={() => this.ModalOpen('SignUp')}
                    >
                      JOIN FREE
                    </button>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
          <UserModal onHide={this.ModalClose} />
        </div>
      </section>
    );
  }
}

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
)(TopNavbar);

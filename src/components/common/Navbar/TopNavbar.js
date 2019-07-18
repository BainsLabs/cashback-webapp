import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import logo from 'static/icons-images/logo.png';
import Input from 'components/common/inputField';
import { connect } from 'react-redux';
import DropdownComponent from 'components/common/DropDown';
import { faMapMarkerAlt, faSortDown } from '@fortawesome/fontawesome-free-solid';
import { SignInModal, SignUpModal, CloseModal } from 'redux/actions/modalActions';
import { isLogout } from 'redux/actions/userActions';
import UserModal from 'components/UserForm/Modal';
import { Link } from 'react-router-dom';
import { country, language } from 'constants/dropdown';

class TopNavbar extends Component {
  ModalOpen = (e) => {
    if (e === 'SignIn') {
      this.props.SignInModal();
    } else {
      this.props.SignUpModal();
    }
  };

  LogOut = async () => {
    await Auth.signOut();
    await this.props.isLogout();
  };

  ModalClose = () => {
    this.props.CloseModal();
  };

  render() {
    const { user } = this.props;
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
                    languageChange={this.props.content}
                  />
                </Col>
                {user.authenticated ? (
                  <Col>
                    <button className="top-navbar__join-btn" onClick={e => this.LogOut(e)}>
                      Logout
                    </button>
                  </Col>
                ) : (
                  <Col>
                    <button
                      className="top-navbar__login-btn"
                      onClick={e => this.ModalOpen('SignIn')}
                    >
                      Login
                    </button>
                    <span className="text-white">/</span>
                    <button
                      className="top-navbar__join-btn"
                      onClick={e => this.ModalOpen('SignUp')}
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
)(TopNavbar);

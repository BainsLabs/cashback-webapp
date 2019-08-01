/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import logo from 'static/images/home-page/logo.png';
import Input from 'components/common/inputField';
import { connect } from 'react-redux';
import DropdownComponent from 'components/common/DropDown';
import { faMapMarkerAlt, faSortDown } from '@fortawesome/fontawesome-free-solid';
import { modalState } from 'redux/actions/modalActions';
import UserModal from 'components/UserForm/Modal';
import { Link } from 'react-router-dom';
import { country, language } from 'constants/dropdown';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';

class TopNavbar extends Component {
  ModalOpen = async (name) => {
    // e.preventDefault();
    const { modalState } = this.props;
    // const modalType = e === 'SignIn' ? modalState('signin') : modalState('signup');
    await modalState(name);
  };

  LogOut = async () => {
    await Auth.signOut();
    localStorage.clear();
    window.location.reload();
  };

  onCountryChange = (e) => {
    // console.log(e.target.value, 'country');
    // eslint-disable-next-line no-undef
    localStorage.setItem('country', e.target.value);
    // window.location.reload();
  };

  ModalClose = async () => {
    const { modalState } = this.props;
    await modalState(null);
  };

  render() {
    const { intl } = this.props;
    const authenticated = localStorage.getItem('authenticated');
    return (
      <section className="top-navbar">
        <div className="container top-navbar__container">
          <Row>
            <Col lg={3}>
              <Link to="/">
                <img src={logo} width="250rem" alt="logo" />
              </Link>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={8}>
                  <Input
                    placeholder={intl.formatMessage({ id: 'data.search' })}
                    autoFocus
                    className="top-navbar__search"
                  />
                </Col>
                <Col lg={4}>
                  <DropdownComponent
                    icon={faMapMarkerAlt}
                    iconLeft
                    menu={country}
                    label={<FormattedMessage id="data.filterboxSCselectcountry" />}
                    className="top-navbar__select-country"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <Row>
                <Col lg={4} className="no-padding">
                  <DropdownComponent
                    icon={faSortDown}
                    label={<FormattedMessage id="data.language" />}
                    menu={language}
                    className="top-navbar__select-language"
                    languageChange={this.onCountryChange}
                  />
                </Col>
                {authenticated ? (
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
                  <Col className="no-padding">
                    <button
                      className="top-navbar__login-btn"
                      type="button"
                      onClick={() => this.ModalOpen('signin')}
                    >
                      <FormattedMessage id="data.buttonlplogin" />
                    </button>
                    <span className="text-white">/</span>
                    <button
                      className="top-navbar__join-btn"
                      type="button"
                      onClick={() => this.ModalOpen('signup')}
                    >
                      <FormattedMessage id="data.HPjoinfree" />
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
};

TopNavbar.propTypes = {
  intl: intlShape.isRequired,
};

const mapStateToProps = (state) => {
  return { user: state.User };
};

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TopNavbar),
);

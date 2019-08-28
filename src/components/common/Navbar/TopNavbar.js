/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import logo from 'static/icons-images/Logo1_Horiz_Black.png';
import logochi from 'static/images/home-page/logo(chi).png';
import Input from 'components/common/inputField';
import { connect } from 'react-redux';
import DropdownComponent from 'components/common/DropDown';
import { faMapMarkerAlt, faSortDown } from '@fortawesome/fontawesome-free-solid';
import { modalState } from 'redux/actions/modalActions';
import UserModal from 'components/UserForm/Modal';
import { Link } from 'react-router-dom';
import { country, language } from 'constants/dropdown';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import Select from 'react-select';
import { reverseGeo } from 'redux/actions/geoActions'

class TopNavbar extends Component {
  state = {
    countryValue: '',
  }
  async componentDidMount() {
    await this.getLocation()
  }
  getLocation = () => {
    const { reverseGeo, address } = this.props
      return new Promise((res,rej) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (location) => {
           reverseGeo(location.coords.longitude, location.coords.latitude).then((data) => {
            this.setState({
              countryValue: {
                label: data.address.country,
                value: data.address.country_code
              }
            })

           })
           res('done')
        });
        } else {
          console.log('browser not supported')
          rej('error')
        }
      })
  }
  ModalOpen = async (name) => {
    // e.preventDefault();
    const { modalState } = this.props;
    // const modalType = e === 'SignIn' ? modalState('signin') : modalState('signup');
    await modalState(name);
    await ReactTooltip.rebuild();
  };

  LogOut = async () => {
    await Auth.signOut();
    localStorage.removeItem('authenticated');
    localStorage.removeItem('profile');
    window.location.reload();
  };


  onLanguageChange = (e) => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('country', e.target.value);
    window.location.reload();
  };

  onCountryChange = selectedValue => {
    console.log(selectedValue, 'country');
    this.setState({
      countryValue: selectedValue
    })
  };

  ModalClose = async () => {
    const { modalState } = this.props;
    await modalState(null);
  };

  render() {
    const colourStyles = {
      control: styles => ({ ...styles,borderRadius: '2rem', backgroundColor: '#fbec8d', marginTop: '1rem' }),
    };
    // const language = localStorage.getItem('country')
    const { user, content, intl } = this.props;
    const {countryValue} = this.state
    const authenticated = localStorage.getItem('authenticated');
    return (
      <section className="top-navbar">
        <div className="container top-navbar__container">
          <Row>
            <Col lg={3}>
              <Link to="/">
                <img
                  src={localStorage.getItem('country') === 'en-US' ? logo : logochi}
                  width="250rem"
                  alt="logo"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6} style={{ visibility: 'hidden' }}>
                  <Input
                    placeholder={intl.formatMessage({ id: 'data.search' })}
                    autoFocus
                    className="top-navbar__search"
                  />
                </Col>
                <Col lg={6} xs={12}>
                <Select
                  defaultValue={country[0]}
                  isSearchable={true}
                  name="country"
                  options={country}
                  onChange={this.onCountryChange}
                  styles={colourStyles}
                  value={countryValue}
                />
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <Row className="logout__container">
                <Col lg={4} xs={4} className="no-padding">
                  <DropdownComponent
                    icon={faSortDown}
                    label={<FormattedMessage id="data.topLanguage" />}
                    menu={language}
                    className="top-navbar__select-language"
                    languageChange={this.onLanguageChange}
                  />
                </Col>
                {authenticated ? (
                  <Col lg={8} xs={8}>
                    <button
                      type="button"
                      className="top-navbar__join-btn"
                      onClick={e => this.LogOut(e)}
                    >
                      <FormattedMessage id="data.Logout" />
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

TopNavbar.propTypes = {
  intl: intlShape.isRequired,
};

const mapDispatchToProps = {
  modalState,
  reverseGeo
};

const mapStateToProps = (state) => {
  return {
    user: state.User,
  };
};

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TopNavbar),
);

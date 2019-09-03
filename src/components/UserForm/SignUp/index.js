/* eslint-disable no-shadow */

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Input from 'components/common/inputField';
import CommonSelect from 'components/common/selectField';
import { ReferOptions } from 'constants/referOptions';
// import DropdownComponent from 'components/common/DropDown';
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';
import { country } from 'constants/dropdown';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Auth } from 'aws-amplify';
import LoaderButton from 'components/common/LoaderButton';
import { Link, withRouter } from 'react-router-dom';
import { UserSignUp } from 'redux/actions/userActions';
import { modalState } from 'redux/actions/modalActions';
import WelcomeModal from 'components/welcome';
import {
  userRegister,
  getUserEmail,
  verifyEmail,
  getUserName,
  userStatusCheck,
  getUserProfile,
} from 'redux/actions/signupActions';
import ReactTooltip from 'react-tooltip';
import uuid from 'uuid';
import Select from 'react-select';

class SignUp extends Component {
  state = {
    isLoading: false,
    username: '',
    usernameError: '',
    email: '',
    password: '',
    referUsernameError: '',
    passwordError: <FormattedMessage id="data.passwordText" />,
    sponsorId: 10,
    refer: 'FRIEND',
    friendUsername: '',
    signUperror: '',
    name: '',
    domain: '',
    countryValue: 'AD',
    contryLabel: '',
    isAccepted: false,
    newUser: null,
    open: false,
    emailError: false,
  };

  validateForm = () => {
    const {
      username,
      email,
      password,
      refer,
      friendUsername,
      isAccepted,
      emailError,
      usernameError,
    } = this.state;
    if (refer === 'FRIEND') {
      return (
        friendUsername.length > 0 &&
        username.length > 0 &&
        email.length > 0 &&
        password.length > 0 &&
        usernameError == '' &&
        emailError == false
      );
    }
    return (
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      usernameError == '' &&
      emailError == false
    );
  };
  componentWillMount() {
    const { urlUser,address } = this.props;
    if(Object.keys(address).length > 0){
      console.log(address, "testing addreess")
      this.setState({
        countryValue: {value: address.address.country_code.toUpperCase(), label: address.address.country }
      })
    }
    let urlUsername;
    if (urlUser && urlUser.username && urlUser.username.Count > 0) {
      urlUsername = urlUser.username.Items[0].username;
      console.log(urlUsername, 'usernamee');
      if (urlUsername !== '') {
        this.setState(
          {
            friendUsername: urlUsername.toLowerCase(),
          },
          async () => await this.referUser(),
        );
      }
    }
  }
  userCheck = async () => {
    const { username } = this.state;
    const { getUserEmail } = this.props;
    const params = {
      username: username.toLowerCase(),
      checkType: 'usernameCheck',
    };
    const usercheckResult = await getUserEmail(params);
    if (usercheckResult.result) {
      this.setState({
        usernameError: (
          <p>
            <FormattedMessage id="data.alreadyExist" />
          </p>
        ),
      });
    } else {
      this.setState({
        usernameError: '',
      });
    }
  };
  onVerifyEmail = async () => {
    const { verifyEmail } = this.props;
    const { email } = this.state;
    const rest = await verifyEmail({ email: email.toLowerCase() });
    if (rest.result) {
      this.setState({
        emailError: true,
      });
      return;
    }
    this.setState({
      emailError: false,
    });
  };
  onCountryChange = selectedOption => {
    console.log(selectedOption);
    this.setState({
      countryValue: selectedOption
    });
  };

  referUser = async () => {
    const { friendUsername } = this.state;
    const { getUserEmail } = this.props;
    const params = {
      username: friendUsername.toLowerCase(),
      checkType: 'getUserEmail',
    };

    const user = await getUserEmail(params);
    if (user.Count !== 0) {
      this.setState({
        name: `${user.Items[0].first_name} ${user.Items[0].last_name}`,
        sponsorId: user.Items[0].dist_id,
      });
    } else {
      this.setState({
        referUsernameError: 'Username does not exist',
      });
    }
  };

  validateFields = () => {
    const { username, password } = this.state;
    const passwordRegularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    return passwordRegularExpression.test(password);
  };

  handleChange = async event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
        referUsernameError: '',
        signUperror: '',
      },
      () => {
        this.validateFields();
        this.validateForm();
        console.log(this.state);
      },
    );
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { userRegister, userStatusCheck } = this.props;
    let { email, username, password, sponsorId, countryValue } = this.state;
    this.setState({ isLoading: true });
    const tid = uuid()
    try {
      const newUser = await userRegister({
        sessionId: uuid(),
        step: 'registration',
        personalInformation: {
          firstName: '-',
          midInit: null,
          lastName: '-',
          birthDate: '27/08/2001',
          company: null,
        },
        address: '-',
        address2: '-',
        city: '-',
        country: countryValue.value,
        countryState: '-',
        postalCode: '123456',
        socialSecNumber: null,
        email,
        mobilePhone: '111111',
        mobileCode: '+91',
        homePhone: null,
        homeCode: null,
        workPhone: null,
        workCode: null,
        reference: 'social',
        password,
        domain: [`${username}.mytravelbiz.com`],
        treeStructure: null,
        newsletter: false,
        package: '2.2',
        rankAward: 'optOut',
        shipMethod: null,
        billing: { method: 'wire_transfer', tid },
        sponsorId,
        position: null,
        uplinedid: null,
        settings: { defaultLanguage: 'en_US' },
        shipingAddress: {
          address: '-',
          address2: '-',
          city: '-',
          country: countryValue.value,
          countryState: '-',
          postalCode: '123456',
        },
        provider: '6degrees',
      });
      let userStatus = 200;
      let userStatusPending = 201;
      while (userStatus !== userStatusPending) {
          const res = await userStatusCheck({ email, tid });
          userStatusPending = res.statusCode;
          console.log(userStatusPending);
      }
      this.setState({
        newUser,
      });

      await this.handleConfirmationSubmit();
    } catch (e) {
      this.setState({ isLoading: false, signUperror: e.message });
    }
  };

  handleConfirmationSubmit = async () => {
    const { modalState, getUserEmail, getUserProfile } = this.props;
    const { email, username } = this.state;
    let emailLowerCase = email.toLowerCase();
    this.setState({ isLoading: true });
    try {
      await Auth.signIn(emailLowerCase, this.state.password);
      localStorage.setItem('authenticated', true);
      modalState('welcome');
      // this.props.history.push("/");

      let params = {
        username,
        checkType: 'getUserEmail',
      };
      this.modalOpen();
      const userData = await getUserProfile(params);
      console.log(userData, 'userrrrrr');
      localStorage.setItem('profile', JSON.stringify(userData));
      await getUserEmail(params);
      // window.location.reload();
    } catch (e) {
      this.setState({ isLoading: false, signUperror: e.message });
    }
  };
  modalOpen = () => {
    const { open } = this.state;
    this.setState({
      open: true,
    });
  };
  modalClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const colourStyles = {
      control: styles => ({ ...styles, background: 'none',borderRadius:'2rem',border: '2px solid #B7BFCD', paddingLeft: '11px',outline: 'none' }),
    };
    const {
      username,
      email,
      password,
      usernameError,
      passwordError,
      countryValue,
      refer,
      referUsernameError,
      friendUsername,
      name,
      isLoading,
      emailError,
      open,
    } = this.state;
    const { intl, modalState, urlUser } = this.props;
    let urlUsername;
    if (urlUser && urlUser.username && urlUser.username.Count > 0) {
      urlUsername = urlUser.username.Items[0].username;
      console.log(urlUsername, 'usernamee');
    }
    return (
      <section className="auth-right__signUp">
        <div>
          <h2 className="signUp-heading">
            <FormattedMessage id="data.userCreateAccount" />
          </h2>
        </div>
        <Row>
          <Col className="signup__input">
            <Input
              placeholder={intl.formatMessage({
                id: 'data.fieldsuchooseusername',
              })}
              onBlur={this.userCheck}
              value={username}
              onChange={this.handleChange}
              autoFocus
              name="username"
            />
            <i
              data-tip={intl.formatMessage({ id: 'data.usernameerror' })}
              class="far fa-question-circle"
            />
            <ReactTooltip />
            <p className="errormessage no-padding">{usernameError}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              placeholder={intl.formatMessage({ id: 'data.HPenteryouremail' })}
              value={email}
              name="email"
              type="email"
              onBlur={this.onVerifyEmail}
              onChange={this.handleChange}
            />
            {emailError && (
              <p className="errormessage no-padding">
                <FormattedMessage id="data.emailexist" />
              </p>
            )}
          </Col>
        </Row>
        <Row>
          <Col className="signup__input">
            <Input
              placeholder={intl.formatMessage({ id: 'data.fieldsu' })}
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
            />
            <i
              data-tip={intl.formatMessage({ id: 'data.passwordText' })}
              class="far fa-question-circle"
            />
            <ReactTooltip />
            {/* {!this.validateFields() && <span className="errormessage ">{passwordError}</span>} */}
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              <FormattedMessage id="data.filterboxSCselectcountry" />
            </label>
            <Select
              defaultValue={country[0]}
              isSearchable={true}
              options={country.sort(function(a, b){
                if(a.label < b.label) { return -1; }
             })}
              placeholder={intl.formatMessage({ id: 'data.HPselectcountry' })}
              onChange={this.onCountryChange}
              name="country"
              value={countryValue}
              styles={colourStyles}
            />
            {/* <Select

              options={country}
              className="signup__select"
              labelClass="signup__selectlabel"
              optionClass="signup__option"
              onChange={this.onCountryChange}
              name="country"
              value={countryValue}
            /> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <CommonSelect
              label={<FormattedMessage id="data.copysu" />}
              options={ReferOptions}
              className="signup__select"
              labelClass="signup__selectlabel"
              optionClass="signup__option"
              onChange={this.handleChange}
              name="refer"
              value={refer}
            />
          </Col>
        </Row>
        {refer === 'FRIEND' ? (
          <Row>
            <Col>
              <Input
                placeholder={intl.formatMessage({ id: 'data.friendsUsername' })}
                onBlur={this.referUser}
                type="text"
                name="friendUsername"
                onChange={this.handleChange}
                value={friendUsername}
              />
              <span className="text-danger">{referUsernameError}</span>
            </Col>
            {name !== '' && name !== '- -' ? (
              <Col>
                <Input
                  placeholder={intl.formatMessage({ id: 'data.friendsName' })}
                  // onBlur={this.referUser}
                  type="text"
                  disabled
                  name="name"
                  onChange={this.handleChange}
                  value={name}
                />
              </Col>
            ) : (
              ''
            )}
          </Row>
        ) : (
          ''
        )}
        <Row>
          <Col>
            <Input id="isAccepted" type="checkbox" className="signup__check" />
            &nbsp;
            <span className="terms">
              <Link to="/terms-conditions" target="_blank">
                <FormattedMessage id="data.agressterm" />
              </Link>
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <LoaderButton
              block
              disabled={!this.validateForm()}
              isLoading={isLoading}
              className={`auth-right__signUp-btn ${!this.validateForm() ? 'disablled' : ''}`}
              text={<FormattedMessage id="data.signUp" />}
              loadingText="Signing up…"
              onClick={this.handleSubmit}
            />
          </Col>
        </Row>
      </section>
    );
  }
}

SignUp.propTypes = {
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return { urlUser: state.User,
    address: state.GeoReducer || {}
   };
};

const mapDispatchToProps = {
  UserSignUp,
  userRegister,
  modalState,
  getUserEmail,
  verifyEmail,
  getUserName,
  userStatusCheck,
  getUserProfile,
};

export default injectIntl(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(SignUp),
  ),
);

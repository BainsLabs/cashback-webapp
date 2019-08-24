/* eslint-disable no-shadow */
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Input from "components/common/inputField";
import Select from "components/common/selectField";
import { ReferOptions } from "constants/referOptions";
import DropdownComponent from "components/common/DropDown";
import { faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid";
import { country } from "constants/dropdown";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";
import { Auth } from "aws-amplify";
import LoaderButton from "components/common/LoaderButton";
import { Link, withRouter } from "react-router-dom";
import { UserSignUp } from "redux/actions/userActions";
import { modalState } from "redux/actions/modalActions";
import WelcomeModal from "components/welcome"
import {
  userRegister,
  getUserEmail,
  verifyEmail
} from "redux/actions/signupActions";
import ReactTooltip from "react-tooltip";

class SignUp extends Component {
  state = {
    isLoading: false,
    username: "",
    usernameError: "",
    email: "",
    password: "",
    referUsernameError: "",
    passwordError: <FormattedMessage id="data.passwordText" />,
    refer: "FRIEND",
    friendUsername: "",
    signUperror: "",
    name: "",
    domain: "",
    countryValue: "AD",
    sponsorId: "",
    isAccepted: false,
    newUser: null,
    open: false,
    emailError: false
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
      usernameError
    } = this.state;
    if (refer === "FRIEND") {
      return (
        friendUsername.length > 0 &&
        username.length > 0 &&
        email.length > 0 &&
        password.length > 0 &&
        usernameError == "" &&
        emailError == false
      );
    }
    return (
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      usernameError == "" &&
      emailError == false
    );
  };

  userCheck = async () => {
    const { username } = this.state;
    const { getUserEmail } = this.props;
    const params = {
      username,
      checkType: "usernameCheck"
    };
    const usercheckResult = await getUserEmail(params);
    if (usercheckResult.result) {
      this.setState({
        usernameError: (
          <p>
            <FormattedMessage id="data.alreadyExist" />
          </p>
        )
      });
    } else {
      this.setState({
        usernameError: ""
      });
    }
  };
  onVerifyEmail = async () => {
    const { verifyEmail } = this.props;
    const { email } = this.state;
    const rest = await verifyEmail({ email });
    if (rest.result) {
      this.setState({
        emailError: true
      });
      return;
    }
    this.setState({
      emailError: false
    });
  };
  onCountryChange = e => {
    console.log(e.target.value);
    this.setState({
      countryValue: e.target.value
    });
  };

  referUser = async () => {
    const { friendUsername } = this.state;
    const { getUserEmail } = this.props;
    const params = {
      username: friendUsername.toLowerCase(),
      checkType: "getUserEmail"
    };

    const user = await getUserEmail(params);
    if (user.Count !== 0) {
      this.setState({
        name: `${user.Items[0].first_name} ${user.Items[0].last_name}`,
        sponsorId: user.Items[0].uuid
      });
    } else {
      this.setState({
        referUsernameError: "Username does not exist"
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
        referUsernameError: "",
        signUperror: ""
      },
      () => {
        this.validateFields();
        this.validateForm();
        console.log(this.state);
      }
    );
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { userRegister } = this.props;
    let { email, username, password, sponsorId, countryValue } = this.state;
    this.setState({ isLoading: true });
    try {
      console.log(countryValue, "countryyyyyyyy")
      const newUser = await userRegister({
        email,
        username,
        password,
        country:countryValue,
        sponsorId
      });
      this.setState({
        newUser
      });

      await this.handleConfirmationSubmit();

    } catch (e) {
      this.setState({ isLoading: false, signUperror: e.message });
    }
  };



  handleConfirmationSubmit = async () => {
    const { modalState, getUserEmail } = this.props;
    const { email, username } = this.state;
    let emailLowerCase = email.toLowerCase();
    this.setState({ isLoading: true });
    try {
      await Auth.signIn(emailLowerCase, this.state.password);
      localStorage.setItem("authenticated", true);
      modalState('welcome');
      // this.props.history.push("/");

      let params = {
        username,
        checkType: "getUserEmail"
      };
      this.modalOpen()
      await getUserEmail(params);
      // window.location.reload();
    } catch (e) {
      this.setState({ isLoading: false, signUperror: e.message });
    }
  };
  modalOpen = () => {
    const {open} = this.state
    this.setState({
      open: true
    })
  }
  modalClose = () => {
    this.setState({
      open: false
    })
  }
  render() {
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
      emailError,open
    } = this.state;
    const { intl, modalState } = this.props;
    return (
      <section className="auth-right__signUp">
        <div>
          <h2 className="signUp-heading">
            <FormattedMessage id="data.userCreateAccount" />
          </h2>
        </div>
        <Row>
          <Col>
            <Input
              placeholder={intl.formatMessage({
                id: "data.fieldsuchooseusername"
              })}
              onBlur={this.userCheck}
              value={username}
              onChange={this.handleChange}
              autoFocus
              name="username"
            />
            <p className="errormessage no-padding">{usernameError}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              placeholder={intl.formatMessage({ id: "data.HPenteryouremail" })}
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
          <Col>
            <Input
              placeholder={intl.formatMessage({ id: "data.fieldsu" })}
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
            />
            &nbsp;
            <i
              data-tip={intl.formatMessage({ id: "data.passwordText" })}
              class="fas fa-info"
            />
            <ReactTooltip />
            {/* {!this.validateFields() && <span className="errormessage ">{passwordError}</span>} */}
          </Col>
        </Row>
        <Row>
          <Col>
            <Select
              label={<FormattedMessage id="data.filterboxSCselectcountry" />}
              options={country}
              className="signup__select"
              labelClass="signup__selectlabel"
              optionClass="signup__option"
              onChange={this.onCountryChange}
              name="country"
              value={countryValue}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Select
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
        {refer === "FRIEND" ? (
          <Row>
            <Col>
              <Input
                placeholder={intl.formatMessage({ id: "data.friendsUsername" })}
                onBlur={this.referUser}
                type="text"
                name="friendUsername"
                onChange={this.handleChange}
                value={friendUsername}
              />
              <span className="text-danger">{referUsernameError}</span>
            </Col>
            {name !== "" ? (
              <Col>
                <Input
                  placeholder={intl.formatMessage({ id: "data.friendsName" })}
                  onBlur={this.referUser}
                  type="text"
                  disabled
                  name="name"
                  onChange={this.handleChange}
                  value={name}
                />
              </Col>
            ) : (
              ""
            )}
          </Row>
        ) : (
          ""
        )}
        <Row>
          <Col>
            <Input id="isAccepted" type="checkbox" className="signup__check" />
            &nbsp;
            <span className="terms" onClick={() => modalState(null)}>
              <Link to="/terms-conditions">
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
              className={`auth-right__signUp-btn ${
                !this.validateForm() ? "disablled" : ""
              }`}
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
  intl: intlShape.isRequired
};

const mapDispatchToProps = {
  UserSignUp,
  userRegister,
  modalState,
  getUserEmail,
  verifyEmail
};

export default injectIntl(
  withRouter(
    connect(
      null,
      mapDispatchToProps
    )(SignUp)
  )
);

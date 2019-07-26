/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Input from 'components/common/inputField';
import Select from 'components/common/selectField';
import { ReferOptions } from 'constants/referOptions';
import DropdownComponent from 'components/common/DropDown';
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';
import { country } from 'constants/dropdown';
import { FormattedMessage } from 'react-intl';
import { Auth } from 'aws-amplify';
import LoaderButton from 'components/common/LoaderButton';
import { withRouter } from 'react-router-dom';
import { UserSignUp } from 'redux/actions/userActions';
import { modalState } from 'redux/actions/modalActions';
import { userRegister, getUserEmail } from 'redux/actions/signupActions';

class SignUp extends Component {
  state = {
    isLoading: false,
    username: '',
    usernameError: '',
    email: '',
    password: '',
    passwordError: '',
    refer: '',
    friendUsername: '',
    name:'',
    domain:'',
    country: '',
    sponsorId:'',
    isAccepted: false,
    newUser: null,
  };

  validateForm() {
    const { username, email, password, isAccepted } = this.state;
    return username.length > 0 && email.length > 0 && password.length > 0 && isAccepted;
  }

  userCheck = async () => {
    const { username } = this.state;
    const { getUserEmail } = this.props;
    const params = {
      username,
      checkType: 'usernameCheck',
    };
    const usercheckResult = await getUserEmail(params);
    if (usercheckResult.result) {
      this.setState({
        usernameError: 'Username already exist',
      });
    } else {
      this.setState({
        usernameError: '',
      })
    }
  };

  referUser = async () => {
    const { friendUsername } = this.state;
    const { getUserEmail } = this.props;
    const params = {
      username: friendUsername,
      checkType: 'getUserEmail',
    };

    const user = await getUserEmail(params);
    if(user.Items[0].first_name !== ''){
      this.setState({
        name: `${user.Items[0].first_name} ${user.Items[0].last_name}`,
        sponsorId: user.Items[0].uuid
      })
    }
  };

  validateFields = () => {
    const { username, password } = this.state;
    const passwordRegularExpression = /^(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]) $/;
    this.setState({
      usernameError:
        username.length > 3 || username.length === 0
          ? null
          : 'username length should be greater then 3 characters',
      passwordError: passwordRegularExpression.test(password) ? null : 'error',
    });
  };

  handleChange = async event => {
    const { checkUsername } = this.props;
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (event.target.name === 'username') {
      const params = {
        username: event.target.value,
      };
      // const usernameCheck = await checkUsername(params);
      // console.log(usernameCheck, 'usernameCheck');
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { userRegister } = this.props;
    this.setState({ isLoading: true });
    try {
      const newUser = await userRegister({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        country: 'IN',
        sponsorId: this.state.sponsorId
      });
      console.log(newUser, 'testinguser');
      this.setState({
        newUser,
      });
      await this.handleConfirmationSubmit();
    } catch (e) {
      alert(e.message);
    }
    // this.setState({ isLoading: false });
  };

  handleConfirmationSubmit = async () => {
    const { modalState } = this.props;
    this.setState({ isLoading: true });
    try {
      await Auth.signIn(this.state.email, this.state.password);
      localStorage.setItem('authenticated', true);
      this.props.history.push('/');
      modalState(null);
      window.location.reload();
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    const {
      username,
      email,
      password,
      usernameError,
      passwordError,
      refer,
      friendUsername,
      name
    } = this.state;
    return (
      <section className="auth-right__signUp">
        <div>
          <h2>Create Account</h2>
        </div>
        <Row>
          <Col>
            <Input
              placeholder="Choose Username"
              onBlur={this.userCheck}
              value={username}
              onChange={this.handleChange}
              autoFocus
              name="username"
            />
            <span className="text-danger no-padding">{usernameError}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              placeholder="Enter Email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              placeholder="Create Password"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
            />
          </Col>
          {/* <span className="text-danger">{passwordError}</span> */}
        </Row>
        <Row>
          <Col>
            <DropdownComponent
              icon={faMapMarkerAlt}
              iconLeft
              menu={country}
              onChange={this.handleChange}
              label={<FormattedMessage id="data.filterboxSCselectcountry" />}
              className="signup_country"
              name="country"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Select
              label="How did you hear about us?"
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
        {refer === 'friend' ? (
          <Row>
            <Col>
              <Input
                placeholder="Friends Username"
                onBlur={this.referUser}
                type="text"
                name="friendUsername"
                onChange={this.handleChange}
                value={friendUsername}
              />
            </Col>
            {
              name !== '' ?
                <Col>
                  <Input
                    placeholder="Friends Name"
                    onBlur={this.referUser}
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={name}
                  />
                </Col>:
                ""
                }

            {/* <span className="text-danger">{passwordError}</span> */}
          </Row>
        ) : (
          ''
        )}
        <Row>
          <Col>
            <Input id="isAccepted" type="checkbox" className="signup__check" />
            &nbsp;
            <span>I agree to terms & conditions and privacy policy.</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <LoaderButton
              block
              disabled={this.validateForm()}
              isLoading={this.state.isLoading}
              className="auth-right__signUp-btn"
              text="Join Now"
              loadingText="Signing up…"
              onClick={this.handleSubmit}
            />
          </Col>
        </Row>
      </section>
    );
  }
}

const mapDispatchToProps = {
  UserSignUp,
  userRegister,
  modalState,
  getUserEmail,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(SignUp),
);

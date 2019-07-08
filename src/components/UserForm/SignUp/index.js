import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Input from 'components/common/inputField';
import Select from 'components/common/selectField';
import { ReferOptions } from 'constants/referOptions';
import { Auth } from 'aws-amplify';
import config from 'config';
import Amplify from 'aws-amplify';
import LoaderButton from 'components/common/LoaderButton';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});
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
    isAccepted: false,
    newUser: null,
  };

  validateForm() {
    const { username, email, password, isAccepted } = this.state;
    return username.length > 0 && email.length > 0 && password.length > 0 && isAccepted;
  }

  userCheck = () => {
    const { username } = this.state;
    if (username.length > 0) {
      Auth.signIn(username, 'a')
        .then(user => console.log(user))
        .catch(err => {
          if (err.code !== 'UserNotFoundException') {
            this.setState({
              usernameError: 'Username already exist',
            });
            return;
          }
        });
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
  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => this.validateFields(),
    );
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      const newUser = await Auth.signUp({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        attributes: {
          email: this.state.email,
        },
      });
      this.setState({
        newUser,
      });
      await this.handleConfirmationSubmit();
    } catch (e) {
      alert(e.message);
    }
    this.setState({ isLoading: false });
  };

  handleConfirmationSubmit = async () => {
    this.setState({ isLoading: true });
    try {
      await Auth.signIn(this.state.username, this.state.password);
      this.props.userHasAuthenticated(true);
      this.props.history.push('/');
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
    } = this.state;
    return (
      <section className="signup">
        <div className="container signup__container text-center">
          <h2>Create Account</h2>
        </div>
        <Row>
          <Col>
            <Input
              placeholder="Choose Username"
              className="signup__textfield"
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
              className="signup__textfield"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              placeholder="Create Password"
              className="signup__textfield"
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
                className="signup__textfield"
                type="text"
                name="friendUsername"
                onChange={this.handleChange}
                value={friendUsername}
              />
            </Col>
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
          <Col className="text-center">
            <LoaderButton
              block
              disabled={this.validateForm()}
              isLoading={this.state.isLoading}
              className="signup__button"
              text="Join Now"
              loadingText="Signing up…"
            />
            {/* <button className="signup__button">Join Now</button> */}
          </Col>
        </Row>
      </section>
    );
  }
}

export default SignUp;

import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import LoaderButton from 'components/common/LoaderButton';
import AWS from 'aws-sdk';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUserAttribute,
  CognitoUser,
} from 'amazon-cognito-identity-js';

import './Login.css';

export default class Login extends Component {
  state = {
    isLoading: false,
    username: '',
    password: '',
    usernameError: '',
    mailSent: false,
    loginError: '',
    confirmationCode: '',
    is_forgotPassword: false,
  };

  showForgotPasswordForm = () => {
    console.log('Testing');
    this.setState({
      is_forgotPassword: true,
    });
  };

  validateConfirmationForm() {
    return this.state.username.length > 0;
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      usernameError: '',
      loginError: '',
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true, usernameError: '', loginError: '' });
    export function fetchUser({ login, password }) {
      // console.log(login);
      // console.log(password);
      return function(dispatch, currentState) {
        dispatch({ type: 'FETCH_USER_PENDING' });
        let state = currentState();
        let { UserPool, UserPoolClientId, IdentityPoolId } = state.options;
        var authenticationData = {
          Username: login.toLowerCase().trim(),
          Password: password,
        };

        var authenticationDetails = new AuthenticationDetails(authenticationData);
        var poolData = {
          ClientId: UserPoolClientId, // Your client id here
          UserPoolId: UserPool, // Your user pool id here
        };

        var userPool = new CognitoUserPool(poolData);

        var userData = {
          Username: login.toLowerCase().trim(),
          Pool: userPool,
        };
        var cognitoUser = new CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function(result) {
            let token = result.getAccessToken().getJwtToken();
            let idToken = result.getIdToken().getJwtToken();
            // console.log("access token + " + result.getAccessToken().getJwtToken());
            console.log(result, 'result');
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
              IdentityPoolId, // your identity pool id here
              Logins: {
                // Change the key below according to the specific region your user pool is in.
                [`cognito-idp.us-east-1.amazonaws.com/${UserPool}`]: result
                  .getIdToken()
                  .getJwtToken(),
              },
            });
          },
        });
      };
    }
    // try {
    //   await Auth.signIn(this.state.username, this.state.password);
    //   this.props.userHasAuthenticated(true);
    // } catch (e) {
    //   console.log(e, 'error');
    //   this.setState({ isLoading: false, loginError: e.message });
    // }
  };

  userCheck = () => {
    const { username } = this.state;
    if (username.length > 0) {
      Auth.signIn(username, 'a')
        .then(user => console.log(user))
        .catch(err => {
          if (err.code === 'UserNotFoundException') {
            this.setState({
              usernameError: "Username doesn't exist",
            });
          }
        });
    }
  };

  forgotPassword = async () => {
    const { username, confirmationCode, password } = this.state;
    Auth.forgotPasswordSubmit(username, confirmationCode, password)
      .then(data => console.log(data))
      .catch(e => console.log(e));
  };

  handleConfirmationSubmit = async e => {
    e.preventDefault();
    const { username } = this.state;
    await Auth.forgotPassword(username);
    this.setState({
      mailSent: true,
    });
  };

  renderFogortPasswordForm() {
    return (
      <form>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            onBlur={this.userCheck}
            value={this.state.username}
            onChange={this.handleChange}
          />
          <span className="text-danger">{this.state.usernameError}</span>
        </FormGroup>
        {this.state.mailSent ? (
          <>
            <FormGroup controlId="confirmationCode" bsSize="large">
              <FormLabel>Confirmation Code</FormLabel>
              <FormControl
                autoFocus
                type="tel"
                value={this.state.confirmationCode}
                onChange={this.handleChange}
              />
              <small className="text-muted">Please check your email for the code.</small>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>New Password</FormLabel>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
          </>
        ) : null}
        <LoaderButton
          block
          bsSize="large"
          onClick={this.state.mailSent ? this.forgotPassword : this.handleConfirmationSubmit}
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text={this.state.mailSent ? 'Update' : 'Send'}
          loadingText={this.state.mailSent ? 'Updating...' : 'Sending...'}
        />
      </form>
    );
  }

  render() {
    console.log(this.state.is_forgotPassword);
    return (
      <div className="Login">
        {this.state.is_forgotPassword ? (
          this.renderFogortPasswordForm()
        ) : (
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
              <FormLabel>Username</FormLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.state.usernameError}</span>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
              <span className="text-danger">{this.state.loginError}</span>
            </FormGroup>
            <input
              className="text-danger forgot-password__btn"
              onClick={this.showForgotPasswordForm}
              value="Forgot Password"
              type="button"
            />
            <LoaderButton
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Login"
              loadingText="Logging in…"
            />
          </form>
        )}
      </div>
    );
  }
}

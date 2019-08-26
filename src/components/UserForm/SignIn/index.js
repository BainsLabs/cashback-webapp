/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import LoaderButton from 'components/common/LoaderButton';
import { modalState } from 'redux/actions/modalActions';
import { getUserEmail, getUserProfile } from 'redux/actions/signupActions';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

class SignIn extends Component {
  state = {
    isLoading: false,
    username: '',
    password: '',
    usernameError: '',
    confirmationCode: '',
    Show: false,
    Showing: false,
    loginError: '',
    error: false,
  };

  showForgotPasswordForm = () => {
    this.setState({
      is_forgotPassword: true,
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  };

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
        usernameError: '',
        loginError: '',
      },
      () => this.validateForm(),
    );
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { modalState, getUserEmail, history, getUserProfile } = this.props;
    const usernameLower = username.toLowerCase();
    const params = {
      username: usernameLower,
      checkType: 'getUserEmail',
    };
    this.setState({ isLoading: true, usernameError: '', loginError: '' });
    const email = await getUserEmail(params);
    let userEmail;
    if (email.Count !== 0) {
      userEmail = email && email.Items && email.Items[0].email;
      Auth.signIn(userEmail, password)
        .then(async () => {
          const userData = await getUserProfile(params)
          console.log(userData, "userrrrrr")
          localStorage.setItem('profile', JSON.stringify(userData))
          modalState(null);
          localStorage.setItem('authenticated', true);
          localStorage.setItem('username',usernameLower)
          history.push('/my-earnings');

          window.location.reload();
        })
        .catch(e => this.setState({
          isLoading: false,
          loginError: (
            <p>
              <FormattedMessage id="data.incorrectusernamepass" />
            </p>
          ),
          error: true,
        }));
    } else {
      this.setState({
        error: true,
        loginError: (
          <p>
            <FormattedMessage id="data.usernotexists" />
          </p>
        ),
        isLoading: false,
      });
    }
  };

  validateConfirmationForm() {
    const { username } = this.state;
    return username.length > 0;
  }

  forgotPassword = async () => {
    const { username, confirmationCode, password } = this.state;
    // let usernamelowercase =  username.toLowerCase()
    Auth.forgotPasswordSubmit(username.toLowerCase(), confirmationCode, password)
      .then(data => console.log(data))
      .catch(e => console.log(e));
  };

  handleConfirmationSubmit = async (e) => {
    e.preventDefault();
    const { username } = this.state;
    await Auth.forgotPassword(username);
  };

  render() {
    const {
      username, password, usernameError, isLoading, error, loginError,
    } = this.state;
    const { intl } = this.props;

    return (
      <section className="auth-right__signIn">
        <h3>
          <FormattedMessage id="data.buttonlplogin" />&nbsp;
          <FormattedMessage id="data.to" />&nbsp;
          6Degrees.CASH
        </h3>
        <Form>
          <Form.Row>
            <Col>
              <Input
                placeholder={intl.formatMessage({ id: 'data.fieldlpenterusername' })}
                name="username"
                value={username}
                onChange={this.handleChange}
              />

              <span className="errormessage">{usernameError}</span>
            </Col>
            <Col>
              <Input
                placeholder={intl.formatMessage({ id: 'data.fieldlpenterpassword' })}
                type="password"
                name="password"
                onChange={this.handleChange}
                value={password}
              />
              {error && (
                <span className="errormessage" align="center">
                  {loginError}
                </span>
              )}
            </Col>

            {/* <Col xs={12}>
              <Input id="isAccepted" type="checkbox" className="signup__check" />
              &nbsp;
              <span>Stay Logged In</span>
            </Col> */}
            <Col>
              <LoaderButton
                block
                disabled={!this.validateForm()}
                type="submit"
                isLoading={isLoading}
                text={<FormattedMessage id="data.buttonlplogin" />}
                className={`auth-right__signIn-btn ${!this.validateForm() ? 'disablled' : ''}`}
                loadingText="Logging in…"
                onClick={this.handleSubmit}
              />
            </Col>
          </Form.Row>
        </Form>
          {/* <button type="button" className="forgot_password" onClick={() => modalState('forgot')}>
            Click here to reset your password
          </button> */}
      </section>
    );
  }
}

SignIn.propTypes = {
  intl: intlShape.isRequired,
};

const mapDispatchToProps = {
  modalState,
  getUserEmail,
  getUserProfile,
};

export default injectIntl(
  withRouter(
    connect(
      null,
      mapDispatchToProps,
    )(SignIn),
  ),
);

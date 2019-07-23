/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { Auth } from 'aws-amplify';
import LoaderButton from 'components/common/LoaderButton';
import { modalState } from 'redux/actions/modalActions';
import { getUserEmail } from 'redux/actions/signupActions';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    isLoading: false,
    username: '',
    password: '',
    usernameError: '',
    confirmationCode: '',
  };

  showForgotPasswordForm = () => {
    this.setState({
      is_forgotPassword: true,
    });
  };

  validateForm() {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      usernameError: '',
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { modalState, getUserEmail } = this.props;
    const params = {
      username,
    };
    const email = await getUserEmail(params);
    const userEmail = email && email.Items && email.Items[0].email;
    this.setState({ isLoading: true, usernameError: '', loginError: '' });

    try {
      const user = await Auth.signIn(userEmail, password);
      modalState(null);
      localStorage.setItem('authenticated', true);
      window.location.reload()
    } catch (e) {
      this.setState({ isLoading: false, loginError: e.message });
    }
  };

  validateConfirmationForm() {
    const { username } = this.state;
    return username.length > 0;
  }

  forgotPassword = async () => {
    const { username, confirmationCode, password } = this.state;
    Auth.forgotPasswordSubmit(username, confirmationCode, password)
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
      username, password, usernameError, isLoading,
    } = this.state;
    const { modalState } = this.props;

    return (
      <section className="auth-right__signIn">
        <h3>Sign in to 6Degrees.CASH</h3>
        <Form>
          <Form.Row>
            <Col>
              <Input
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />

              <span className="text-danger">{usernameError}</span>
            </Col>
            <Col>
              <Input
                placeholder="Enter Password"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={password}
              />
            </Col>
            <Col xs={12}>
              <Input id="isAccepted" type="checkbox" className="signup__check" />
              &nbsp;
              <span>Stay Logged In</span>
            </Col>
            <Col>
              <LoaderButton
                block
                disabled={!this.validateForm()}
                type="submit"
                isLoading={isLoading}
                text="Login"
                className="auth-right__signIn-btn"
                loadingText="Logging in…"
                onClick={this.handleSubmit}
              />
            </Col>
          </Form.Row>
        </Form>

        <div className="forgot-password__container">
          <button type="button" className="forgot_password" onClick={() => modalState('forget')}>
            Click here to reset your password
          </button>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
  modalState,
  getUserEmail,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);

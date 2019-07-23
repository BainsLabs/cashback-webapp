/* eslint-disable no-shadow */
import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
import Input from "components/common/inputField";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import LoaderButton from "components/common/LoaderButton";
import { modalState } from "redux/actions/modalActions";
import { getUserEmail } from "redux/actions/signupActions";
import { connect } from "react-redux";

class SignIn extends Component {
  state = {
    isLoading: false,
    username: "",
    password: "",
    usernameError: "",
    confirmationCode: "",
    Show: false,
    Showing: false,
    loginError: "",
    error: false
  };

  showForgotPasswordForm = () => {
    this.setState({
      is_forgotPassword: true
    });
  };

  validateForm() {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      usernameError: ""
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    const { modalState, getUserEmail, history } = this.props;
    const params = {
      username
    };
    const email = await getUserEmail(params);
    console.log(email, "emailll");
    let userEmail;
    if (email.Count !== 0) {
      userEmail = email && email.Items && email.Items[0].email;
    } else {
      this.setState({
        error: true,
        loginError: "Username or password is incorrect"
      });
      return;
    }

    // this.setState({ isLoading: true, usernameError: '', loginError: '' });

    try {
      const user = await Auth.signIn(userEmail, password);
      this.setState({
        Show: !this.state.Show
      });
      modalState(null);
      localStorage.setItem("authenticated", true);
      window.location.reload();
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

  handleConfirmationSubmit = async e => {
    e.preventDefault();
    const { username } = this.state;
    await Auth.forgotPassword(username);
  };

  render() {
    const {
      username,
      password,
      usernameError,
      isLoading,
      error,
      loginError
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
            {error && (
              <span className="text-danger" align="center">
                {loginError}
              </span>
            )}
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
                text="Login"
                className="auth-right__signIn-btn"
                loadingText="Logging in…"
                onClick={this.handleSubmit}
              />
            </Col>
          </Form.Row>
        </Form>

        {/* <div className="forgot-password__container">
          <button type="button" className="forgot_password" onClick={() => modalState('forget')}>
            Click here to reset your password
          </button>
        </div> */}
      </section>
    );
  }
}

const mapDispatchToProps = {
  modalState,
  getUserEmail
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignIn)
);

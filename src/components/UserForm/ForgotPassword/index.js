import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { Auth } from 'aws-amplify';
import LoaderButton from 'components/common/LoaderButton';

class ForgotPassword extends Component {
  state = {
    isLoading: false,
    username: '',
    password: '',
    usernameError: '',
    mailSent: false,
    loginError: '',
    confirmationCode: '',
  };

  validateForm() {
    const {
      username, email, password, isAccepted, confirmationCode,
    } = this.state;
    return confirmationCode.length > 0;
  }

  userCheck = () => {
    const { username } = this.state;
    if (username.length > 0) {
      Auth.signIn(username, 'a')
        .then(user => console.log(user))
        .catch((err) => {
          if (err.code !== 'UserNotFoundException') {
            this.setState({
              usernameError: 'Username already exist',
            });
          }
        });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
    this.setState({
      mailSent: true,
    });
  };

  render() {
    const {
      username, password, usernameError, confirmationCode, mailSent, isLoading,
    } = this.state;
    return (
      <section className="auth-right__forgot">
        <h2>Reset Password</h2>
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
          </Col>
          <span className="text-danger">{usernameError}</span>
        </Row>
        <Row>{/* <span className="text-danger">{passwordError}</span> */}</Row>

        {mailSent ? (
          <div>
            <Row>
              <Col>
                <Input
                  placeholder="Confirmation Code"
                  name="confirmationCode"
                  onChange={this.handleChange}
                  value={confirmationCode}
                />
              </Col>
              <small className="text-muted">Please check your email for the code.</small>
            </Row>
            <Row>
              <Col>
                <Input
                  placeholder="New Password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={password}
                />
              </Col>
            </Row>
          </div>
        ) : (
          ''
        )}
        <Row>
          <Col className="text-center">
            <LoaderButton
              block
              disabled={!this.validateForm()}
              isLoading={isLoading}
              className="auth-right__forgot-btn"
              text="Reset Password"
              loadingText="Sending Mail..."
              onClick={this.handleConfirmationSubmit}
            />
          </Col>
        </Row>
      </section>
    );
  }
}

export default ForgotPassword;

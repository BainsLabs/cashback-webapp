import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Input from "components/common/inputField";
import { Auth } from "aws-amplify";
import LoaderButton from "components/common/LoaderButton";

class ForgotPassword extends Component {
  state = {
    isLoading: false,
    username: "",
    password: "",
    usernameError: "",
    mailSent: false,
    loginError: "",
    confirmationCode: ""
  };

  validateForm() {
    const {
      username,
      email,
      password,
      isAccepted,
      confirmationCode
    } = this.state;
    return confirmationCode.length > 0;
  }

  userCheck = () => {
    const { username } = this.state;
    if (username.length > 0) {
      Auth.signIn(username, "a")
        .then(user => console.log(user))
        .catch(err => {
          if (err.code !== "UserNotFoundException") {
            this.setState({
              usernameError: "Username already exist"
            });
            return;
          }
        });
    }
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => this.validateFields()
    );
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
      mailSent: true
    });
  };
  render() {
    const { username, password, usernameError, confirmationCode } = this.state;
    return (
      <section className="signup">
        <div className="container signup__container text-center">
          <h2>Reset Password</h2>
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
          </Col>
          <span className="text-danger">{usernameError}</span>
        </Row>
        <Row>{/* <span className="text-danger">{passwordError}</span> */}</Row>

        {this.state.mailSent ? (
          <div>
            <Row>
              <Col>
                <Input
                  placeholder="Confirmation Code"
                  className="signup__textfield"
                  name="confirmationCode"
                  onChange={this.handleChange}
                  value={confirmationCode}
                />
              </Col>
              <small class="text-muted">
                Please check your email for the code.
              </small>
            </Row>
            <Row>
              <Col>
                <Input
                  placeholder="New Password"
                  className="signup__textfield"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={password}
                />
              </Col>
            </Row>
          </div>
        ) : (
          ""
        )}
        <Row>
          <Col className="text-center">
            <LoaderButton
              block
              disabled={!this.validateForm()}
              isLoading={this.state.isLoading}
              className="signup__button"
              text="Reset Password"
              loadingText="Signing up…"
            />
            {/* <button className="signup__button">Join Now</button> */}
          </Col>
        </Row>
      </section>
    );
  }
}

export default ForgotPassword;

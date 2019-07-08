import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { Auth } from 'aws-amplify';
import LoaderButton from 'components/common/LoaderButton';
import { ForgotModal, CloseModal } from 'redux/actions/modalActions';
import { isAuthenticated } from 'redux/actions/userActions';
import { connect } from 'react-redux';

class SignIn extends Component {
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
      [event.target.name]: event.target.value,
      usernameError: '',
      loginError: '',
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true, usernameError: '', loginError: '' });

    try {
      let user = await Auth.signIn(this.state.username, this.state.password);
      this.props.isAuthenticated(user);
      this.props.CloseModal();
    } catch (e) {
      console.log(e, 'error');
      this.setState({ isLoading: false, loginError: e.message });
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

  render() {
    const { username, password, usernameError } = this.state;

    return (
      <section className="signup">
        <div className="container signup__container text-center">
          <h3>SignIn to 6Degree.CASH</h3>
        </div>
        <Row>
          <Col>
            <Input
              placeholder="Choose Username"
              className="signup__textfield"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <span className="text-danger">{usernameError}</span>
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
        </Row>
        <Row>
          <Col className="text-center">
            <Input id="isAccepted" type="checkbox" className="signup__check" />
            &nbsp;
            <span>Stay Logged In</span>
          </Col>
        </Row>
        <Row>
          <Col className="text-center forgot__container">
            <button className="forgot_password" onClick={this.props.ForgotModal}>
              Forgot Password
            </button>
          </Col>
          <Col className="text-center">
            <LoaderButton
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Login"
              className="text-uppercase signup__button"
              loadingText="Logging in…"
              onClick={this.handleSubmit}
            />
            {/* <button className="text-uppercase signup__button">Login</button> */}
          </Col>
        </Row>
      </section>
    );
  }
}

const mapDispatchToProps = {
  ForgotModal,
  isAuthenticated,
  CloseModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);

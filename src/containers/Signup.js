import React, { Component } from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import LoaderButton from 'components/common/LoaderButton';
import './Signup.css';

export default class Signup extends Component {
  state = {
    isLoading: false,
    username: '',
    usernameError: '',
    email: '',
    password: '',
    passwordError: '',
    refer: '',
    isAccepted: false,
    newUser: null,
  };

  validateForm() {
    const {
      username, email, password, isAccepted,
    } = this.state;
    return username.length > 0 && email.length > 0 && password.length > 0 && isAccepted;
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

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => this.validateFields(),
    );
  };

  handleSubmit = async (event) => {
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

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            onBlur={this.userCheck}
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="username"
            icon={faUser}
          />
          <span className="text-danger">{this.state.usernameError}</span>
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
            required
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="password"
          />
        </FormGroup>
        <FormGroup controlId="refer">
          <FormLabel>How did you hear about us?</FormLabel>
          <FormControl componentClass="select" onChange={this.handleChange}>
            <option value="" disabled selected>
              Select
            </option>
            <option value="socialMedia">Social Media</option>
            <option value="friend">Friend</option>
          </FormControl>
        </FormGroup>
        {this.state.refer === 'friend' && (
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="text"
              onBlur={this.userCheck}
              value={this.state.friendusername}
              onChange={this.handleChange}
              placeholder="Friends username"
            />
            <span className="text-danger">{this.state.usernameError}</span>
          </FormGroup>
        )}
        <input
          id="isAccepted"
          value={this.state.isAccepted}
          onChange={this.handleChange}
          type="checkbox"
        />
        &nbsp;
        <span>I agree to terms & conditions and privacy policy.</span>
        <LoaderButton
          block
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        />
      </form>
    );
  }

  render() {
    return <div className="Signup">{this.state.newUser === null ? this.renderForm() : null}</div>;
  }
}

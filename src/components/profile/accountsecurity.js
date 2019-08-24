import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import {
  Container, Row, Col, InputGroup, FormControl, Button, Form,
} from 'react-bootstrap';
import InputField from 'components/common/inputField';
import ChangePassword from 'static/images/profile/change-password.png';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Snackbar } from '@material/react-snackbar';

class AccountSecurity extends Component {
  state = {
    password: '',
    newPassword: '',
    confirmPassword: '',
    passwordError: '',
    oldPasswordError: '',
    snackbarState: false,
    oldPasswordState: false,
    newPasswordState: false,
    confirmPasswordState: false,
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
      passwordError: '',
      oldPasswordError: '',
    });
  };

  changePassword = () => {
    const {
      password, newPassword, confirmPassword, snackbarState,
    } = this.state;
    if (newPassword === confirmPassword) {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          return Auth.changePassword(user, password, confirmPassword);
        })
        .then((data) => {
          if (data === 'SUCCESS') {
            this.setState({
              snackbarState: !snackbarState,
            });
          }
        })
        .catch((err) => {
          if (err.code === 'LimitExceededException') {
            this.setState({
              oldPasswordError: <FormattedMessage id="data.passwordChangeLimit" />,
            });
          }
          if (err.code === 'InvalidPasswordException') {
            this.setState({
              oldPasswordError: <FormattedMessage id="data.passwordText" />,
            });
          }
          if (err.code === 'NotAuthorizedException') {
            this.setState({
              oldPasswordError: <FormattedMessage id="data.oldPasswordError" />,
            });
          }
        });
    } else {
      this.setState({
        passwordError: <FormattedMessage id="data.newPasswordError" />,
      });
    }
  };

  onPasswordShow = (e) => {
    e.preventDefault();
    const { oldPasswordState, newPasswordState, confirmPasswordState } = this.state;
    if (e.currentTarget.name === 'password') {
      this.setState({
        oldPasswordState: !oldPasswordState,
      });
    }
    if (e.currentTarget.name === 'newPassword') {
      this.setState({
        newPasswordState: !newPasswordState,
      });
    }
    if (e.currentTarget.name === 'confirmPassword') {
      this.setState({
        confirmPasswordState: !confirmPasswordState,
      });
    }
  };

  render() {
    const {
      password,
      newPassword,
      confirmPassword,
      passwordError,
      oldPasswordError,
      snackbarState,
      oldPasswordState,
      newPasswordState,
      confirmPasswordState,
    } = this.state;
    return (
      <>
        <Container className="profile__container">
          <h3>
            <FormattedMessage id="data.accsecurity" />
          </h3>
          <div className="form__container">
            <Row>
              <Col className="account__security">
                <span>
                  <img src={ChangePassword} alt="changepassword" />
                  &nbsp;
                  <FormattedMessage id="data.changepass" />
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={4} xs={12}>
                <Form.Label>
                  <FormattedMessage id="data.oldpassword" />
                </Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    value={password}
                    name="password"
                    onChange={this.onChange}
                    type={oldPasswordState ? 'text' : 'password'}
                  />
                  <InputGroup.Append>
                    <Button type="button" name="password" onClick={this.onPasswordShow}>
                      <i className={oldPasswordState ? 'far fa-eye-slash' : 'far fa-eye'} />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                {oldPasswordError !== '' && <span className="error">{oldPasswordError}</span>}
              </Col>
              <Col md={4} xs={12}>
                <Form.Label>
                  <FormattedMessage id="data.newpass" />
                </Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    value={newPassword}
                    name="newPassword"
                    onChange={this.onChange}
                    type={newPasswordState ? 'text' : 'password'}
                  />
                  <InputGroup.Append>
                    <Button type="button" name="newPassword" onClick={this.onPasswordShow}>
                      <i className={newPasswordState ? 'far fa-eye-slash' : 'far fa-eye'} />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col md={4} xs={12}>
                <Form.Label>
                  <FormattedMessage id="data.confirm" />
                </Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={this.onChange}
                    type={confirmPasswordState ? 'text' : 'password'}
                  />
                  <InputGroup.Append>
                    <Button type="button" name="confirmPassword" onClick={this.onPasswordShow}>
                      <i className={confirmPasswordState ? 'far fa-eye-slash' : 'far fa-eye'} />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                {passwordError !== '' && <span className="error">{passwordError}</span>}
              </Col>
            </Row>
            <Row>
              <Col className="text-right">
                <button type="button" className="savechanges" onClick={this.changePassword}>
                  <FormattedMessage id="data.changep" />
                </button>
              </Col>
            </Row>
          </div>
          <Snackbar message={<FormattedMessage id="data.passwordChange" />} open={snackbarState} />
        </Container>
      </>
    );
  }
}

AccountSecurity.propsType = {
  intl: intlShape.isRequired,
};

export default injectIntl(AccountSecurity);

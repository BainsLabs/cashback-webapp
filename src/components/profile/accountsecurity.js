import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

import { Container, Row, Col } from 'react-bootstrap';
import InputField from 'components/common/inputField';
import ChangePassword from 'static/images/profile/change-password.png';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

class AccountSecurity extends Component {
  state = {
    password: '',
    newPassword: '',
    confirmPassword: '',
    passwordError: '',
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
      passwordError: '',
    });
  };

  changePassword = () => {
    const { password, newPassword, confirmPassword } = this.state;
    if (newPassword === confirmPassword) {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          return Auth.changePassword(user, password, confirmPassword);
        })
        .then((data) => {
          console.log(data);
        })
        .catch(err => this.setState({
          passwordError: 'Old Password entered is incorrect'
        }));
    } else {
      this.setState({
        passwordError: 'New Password and confirm password doesn"t match',
      });
    }
  };

  render() {
    const { intl } = this.props;
    const {
      password, newPassword, confirmPassword, passwordError,
    } = this.state;
    return (
      <>
        <Container className="profile__container">
          <h3>
            <FormattedMessage id="data.accsecurity" />
          </h3>
          <Container className="form__container">
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
                <InputField
                  label={intl.formatMessage({ id: 'data.oldpassword' })}
                  value={password}
                  name="password"
                  onChange={this.onChange}
                  type="password"
                />
              </Col>
              <Col md={4} xs={12}>
                <InputField
                  label={intl.formatMessage({ id: 'data.newpass' })}
                  value={newPassword}
                  name="newPassword"
                  onChange={this.onChange}
                  type="password"
                />
              </Col>
              <Col md={4} xs={12}>
                <InputField
                  label={intl.formatMessage({ id: 'data.confirm' })}
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={this.onChange}
                  type="password"
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-right">
                <button type="button" className="savechanges" onClick={this.changePassword}>
                  <FormattedMessage id="data.changep" />
                </button>
              </Col>
            </Row>
            {passwordError !== '' && <span className="errormessage">{passwordError}</span>}
          </Container>
        </Container>
      </>
    );
  }
}

AccountSecurity.propsType = {
  intl: intlShape.isRequired,
};

export default injectIntl(AccountSecurity);

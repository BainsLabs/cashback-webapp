import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputField from 'components/common/inputField';
import ChangePassword from 'static/images/profile/change-password.png';

const AccountSecurity = () => (
  <>
    <Container className="profile__container">
      <h3>Account Security</h3>
      <Container className="form__container">
        <Row>
          <Col className="account__security">
            <span>
              <img src={ChangePassword} alt="changepassword" />
              &nbsp; Change Password
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputField label="Old Password" />
          </Col>
          <Col>
            <InputField label="New Password" />
          </Col>
          <Col>
            <InputField label="Confirm Password" />
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <button className="savechanges">Update Password</button>
          </Col>
        </Row>
      </Container>
    </Container>
  </>
);

export default AccountSecurity;

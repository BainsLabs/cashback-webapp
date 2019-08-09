import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputField from 'components/common/inputField';

class Profile extends Component {
  render() {
    return (
      <Container className="profile__container">
        <h3>Profile</h3>
        <Container className="form__container">
          <h6>
            Note: If you want to change your feedback settings, contact the&nbsp;
            <span className="customer">Customer Support Team</span>
          </h6>
          <Row>
            <Col>
              <InputField label="Country of residence" />
            </Col>
            <Col>
              <InputField label="Currency" />
            </Col>
            <Col>
              <InputField label="Email" />
            </Col>
          </Row>
        </Container>
        <Container className="form__container">
          <Row>
            <Col>
              <InputField label="First name" />
            </Col>
            <Col>
              <InputField label="Last name" />
            </Col>
            <Col>
              <InputField label="Display Name" />
            </Col>
          </Row>
        </Container>
        <Container className="form__container">
          <Row>
            <Col>
              <InputField label="Language" />
            </Col>
            <Col>
              <InputField label="Mobile Phone" />
            </Col>
            <Col>
              <InputField label="BirthDay" />
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <button className="savechanges">Save Changes</button>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Profile;

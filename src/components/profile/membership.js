import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputField from 'components/common/inputField';
import savingstatus from 'static/images/profile/SavingsStatus.png';
import maximize from 'static/images/profile/Maximize-Cash.png';

const MemberShip = () => (
  <>
    <Container className="profile__container">
      <h3>Manage MemberShip</h3>
      <Container className="form__container">
        <Row>
          <Col md={4}>
            <Row>
              <Col md={5} className="text-left">
                <p>Saving Status</p>
                <img src={savingstatus} alt="saving status" width="50px" height="50px" />
              </Col>
              <Col md={7}>
                <p className="membership__text">
                  Premier level:&nbsp;
                  <span>Active</span>
                </p>
                <p className="vipmembership__text">
                  VIP Membership:
                  {' '}
                  <span>inactive</span>
                </p>
                <p className="transaction">View Transactions</p>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={6}>VIP Member Since:</Col>
              <Col md={6}>
                <InputField type="date" placeholder="YYYY-MM-DD" />
              </Col>
            </Row>
            <Row>
              <Col md={6}>Joined 6Degrees.CASH:</Col>
              <Col md={6}>
                <InputField type="date" placeholder="YYYY-MM-DD" />
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={3}>
                <img src={maximize} alt="maximize cash" />
              </Col>
              <Col md={9}>
                Maximize your Cash Back earnings and benefit from members-only savings.
              </Col>
            </Row>
            <p className="transaction__text">Upgrade to VIP Rewards Membership now</p>
          </Col>
        </Row>
      </Container>
    </Container>
  </>
);

export default MemberShip;

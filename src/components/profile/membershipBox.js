import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputField from 'components/common/inputField';
import savingstatus from 'static/images/profile/SavingsStatus.png';
import maximize from 'static/images/profile/Maximize-Cash.png';

const MemberShipBox = () => (
  <>
    <Container>
      <Row>
        <Col md={4}>
          <Container className="profile__container">
            <h3>MemberShip</h3>
            <Container className="membership__box text-center">
              <h6>FREE</h6>
              Joining Date
              <h5>12th, August 2019</h5>
              <button className="savechanges">Refer Friend</button>
            </Container>
          </Container>
        </Col>
        <Col md={4}>
          <Container className="profile__container">
            <h3>VIP</h3>
            <Container className="membership__box text-center">
              <h6>VIP </h6>
              Joining Date
              <h5>12th, August 2019</h5>
              <button className="savechanges">Refer Friend</button>
            </Container>
          </Container>
        </Col>
        <Col md={4}>
          <Container className="profile__container">
            <h3>VIP TIER</h3>
            <Container className="membership__box text-center">
              <h6>VIP TIER</h6>
              Joining Date
              <h5>12th, August 2019</h5>
              <button className="savechanges">Refer Friend</button>
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  </>
);

export default MemberShipBox;

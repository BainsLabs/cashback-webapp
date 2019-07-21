import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const welcomeGift = () => (
  <Container className="welcomegift__section">
    <h6>You will receive $5 and 5 TLC when you have $25 in paid Cash Back</h6>
    <Row>
      <Col md={6} className="gift__section">
        <p>$5</p>
        <p>pending</p>
      </Col>
      <Col md={6} className="gift__section__left">
        <p>5 TLC</p>
        <p>Pending</p>
      </Col>
    </Row>
    <Row>
      <Col md={3} className="gift__section__two">
        <p>Pending Cash Back</p>
        <p>$35</p>
      </Col>
      <Col md={3} className="gift__section__three">
        <p>Paid Cash Back</p>
        <p>$25</p>
      </Col>
      <Col md={3} className="gift__section__three">
        <p>Total Cash Back</p>
        <p>$55</p>
      </Col>
      <Col md={3} className="gift__section__three">
        <i className="fas fa-info icon_color" />
      </Col>
    </Row>
  </Container>
);

export default welcomeGift;

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CashBackCard from 'components/common/benefitscard';
import { firstSection } from 'constants/cashbackimg';

const WhatIsCashBack = () => (
  <section>
    <Container className="text-center">
      <Row>
        <Col className="cashback__intro">
          <h1 className="font-weight-bold text-uppercase">What is Cashback? </h1>
          <p className="cashback__description">
            When you shop at thousands of the world&apos;s most popular brands through
            6degree.CASH,we simply
            <br />
            give you back a percentage of your spend once purchase is confirmed
          </p>
        </Col>
      </Row>
      <Row>
        {firstSection.map(cashbackimg => (
          <Col md={4} className="cashback__container">
            <CashBackCard className="cashback" backgroundColor="#B7BFCD" marginLeft="0rem">
              <img src={cashbackimg.path} alt={cashbackimg.alt} />

              <p className="font-weight-bold cashback__text">{cashbackimg.alt}</p>

              <p className="cashback__carddesc">{cashbackimg.description}</p>
            </CashBackCard>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default WhatIsCashBack;

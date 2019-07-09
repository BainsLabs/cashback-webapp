import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CashBackCard from 'components/common/benefitscard';
import Browse from 'static/icons-images/Browse(blue).png';
import Shop from 'static/icons-images/shop(blue).png';
import Earn from 'static/icons-images/earncashback(blue).png';

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
        <Col md={4}>
          <CashBackCard className="cashback" backgroundColor="#B7BFCD" marginLeft="0rem">
            <Row>
              <Col>
                <img src={Browse} alt="browse" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="font-weight-bold cashback__text">Browse</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="cashback__carddesc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </Col>
            </Row>
          </CashBackCard>
        </Col>
        <Col md={4}>
          <CashBackCard className="cashback" backgroundColor="#B7BFCD" marginLeft="0rem">
            <Row>
              <Col>
                <img src={Shop} alt="shop" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="font-weight-bold cashback__text">Shop</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="cashback__carddesc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </Col>
            </Row>
          </CashBackCard>
        </Col>
        <Col md={4}>
          <CashBackCard className="cashback" backgroundColor="#B7BFCD" marginLeft="0rem">
            <Row>
              <Col>
                <img src={Earn} alt="earn cashback" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="font-weight-bold cashback__text">Earn</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="cashback__carddesc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </Col>
            </Row>
          </CashBackCard>
        </Col>
      </Row>
    </Container>
  </section>
);

export default WhatIsCashBack;

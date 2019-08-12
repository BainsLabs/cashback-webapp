import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Input from "components/common/inputField";

const MyWallet = props => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Container className="profile__container">
              <h3>Request TLC Payout</h3>
              <Container className="membership__box">
                <Row>
                  <Col md={8} className="mywallet-form">
                    <Input
                      label="Select Payment method"
                      type="text"
                      placeholder="TLC Wallet"
                      labelClass="wallet"
                    />
                    <Input
                      label="Enter Amount"
                      type="text"
                      placeholder="Amount"
                      labelClass="wallet"
                    />
                    <button align="center">Submit Request</button>
                  </Col>
                  <Col md={4}>
                    <div className="eclips text-center">
                      <p>0</p>
                      <p>Withdrawn</p>
                    </div>
                    <div className="eclips text-center">
                      <p>0</p>
                      <p>Available</p>
                    </div>
                    <div className="eclips text-center">
                      <p>5</p>
                      <p>Pending</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
          <Col md={6}>
            <Container className="profile__container">
              <h3>Request $ Payout</h3>
              <Container className="membership__box">
                <Row>
                  <Col md={4}>
                    <div className="eclips text-center">
                      <p>$0</p>
                      <p>Withdrawn</p>
                    </div>
                    <div className="eclips text-center">
                      <p>$0</p>
                      <p>Available</p>
                    </div>
                    <div className="eclips text-center">
                      <p>$5</p>
                      <p>Pending</p>
                    </div>
                  </Col>
                  <Col md={8} className="mywallet-form">
                    <Input
                      label="Select Payment method"
                      type="text"
                      placeholder="TLC Wallet"
                      labelClass="wallet"
                    />
                    <Input
                      label="Enter Amount"
                      type="text"
                      placeholder="Amount"
                      labelClass="wallet"
                    />
                    <button align="center">Submit Request</button>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyWallet;

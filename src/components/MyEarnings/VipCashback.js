import React from 'react';
import {
  Container, Table, Col, Row,
} from 'react-bootstrap';

const VipCashBack = () => (
  <>
    <Container className="filter">
      <ul>
        <li>FILTER</li>
        <li>
          Pending &nbsp;
          <input type="checkbox" className="checkbox" />
        </li>
        <li>
          Declined &nbsp;
          <input type="checkbox" className="checkbox" />
        </li>
        <li>
          Paid &nbsp;
          <input type="checkbox" className="checkbox" />
        </li>
      </ul>
    </Container>
    <Container className="merchant__container">
      <Table striped className="merchant">
        <thead>
          <tr>
            <th>MERCHANT</th>
            <th>DATE</th>
            <th>PURCHASE</th>
            <th>CASHBACK</th>
            <th>TLC REWARD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>04 july 2019</td>
            <td>$100</td>
            <td>$15</td>
            <td>4</td>
          </tr>
        </tbody>
      </Table>
      <Row>
        <Col md={3}>
          <p>Name</p>
          <p>MerchantId: 4444</p>
        </Col>
        <Col md={3}>
          <p>Office Number</p>
          <p>GA345Gw</p>
        </Col>
        <Col md={3}>
          <p>OrderID</p>
          <p>xxxxxxxxx4444</p>
        </Col>
        <Col md={3}>
          <p>VIP Tier</p>
          <p>5%</p>
        </Col>
      </Row>
    </Container>
    <Container className="term__container">
      <Row>
        <Col md={4}>
          <h6>You Qualify for 5% VIP Cash Back</h6>
          <p>
            You are a VIP Member and qualify to receive 5% VIP Cash Back. Carry on saving and you
            will continue to receive bonuses of your Cash Back and TLC Reward.
          </p>
        </Col>
        <Col md={4}>
          <h6>Do you want to qualify for 10% VIP Cash Back?</h6>
          <p>Help ten friends to become VIP Members and you qualify for 10% VIP Cash Back.</p>
        </Col>
        <Col md={4}>
          <h6>Do You want to qualify for 20% VIP Cash Back?</h6>
          <p>Help 20 friends to become VIP Members and you qualify for 20% VIP Cash Cack</p>
        </Col>
      </Row>
    </Container>
  </>
);

export default VipCashBack;

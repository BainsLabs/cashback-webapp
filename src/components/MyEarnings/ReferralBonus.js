import React from 'react';
import {
  Container, Col, Row, Table,
} from 'react-bootstrap';

const ReferBonus = () => (
  <>
    <Container className="referral__container">
      <Row>
        <Col className="refer__col__one">
          <h6>
            You will receive $5 and 5TLC helping your friends save $25 in paid Cash Back. There is
            no limit to the amount of Referral bonuses you can earn. Keep Referring
          </h6>
          <h6>OVERVIEW</h6>
          <Table striped className="merchant">
            <thead>
              <tr>
                <th>SignUps</th>
                <th>Potential Referal Bonus</th>
                <th>Potential TLC Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>25</td>
                <td>$100</td>
                <td>$115</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col className="refer__col__one">
          <h6>
            Track the Cash performance of your friends. Contact your friends who have not yet
            started earning Cash Back to help them save while earning your Referral Bonus
          </h6>
          <h6>YOUR FRIENDS NETWORK</h6>
          <Table striped className="merchant">
            <thead>
              <tr>
                <th>Username</th>
                <th>Friends</th>
                <th>Join Date</th>
                <th>Cash Back Pending</th>
                <th>Cash Back Paid</th>
                <th>Referral Bonus</th>
                <th>TLC Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>User Name</td>
                <td>Amrit</td>
                <td>20 June 2015</td>
                <td>$10</td>
                <td>$15</td>
                <td>$5 Pending</td>
                <td>5 Pending</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </>
);

export default ReferBonus;

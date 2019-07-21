import React from 'react';
import {
  Table, Container, Row, Col,
} from 'react-bootstrap';

const VipBonus = () => (
  <>
    <>
      <Container className="referral__container">
        <Row>
          <Col className="refer__col__one">
            <h6>
              You will receive $5 and 5TLC when your referred friends upgrade to VIP Membership.
              There is no limit to the amount of VIP bonuses you can earn
            </h6>
            <h6>OVERVIEW</h6>
            <Table striped className="merchant">
              <thead>
                <tr>
                  <th>SignUps</th>
                  <th>Potential VIP Bonus</th>
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
              Track the VIP Upgrade status of your friends. Contact you friends who have not yet
              upgraded to help them unblock VIP benefits whilte earning VIP Bonus
            </h6>
            <h6>YOUR FRIENDS NETWORK</h6>
            <Table striped className="merchant">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Friends</th>
                  <th>VIP upgrade Date</th>
                  <th>VIP</th>
                  <th>VIP Bonus</th>
                  <th>TLC Reward</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>User Name</td>
                  <td>Amrit</td>
                  <td>----------</td>
                  <td>Yes</td>
                  <td>$5 Pending</td>
                  <td>5 Pending</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  </>
);

export default VipBonus;

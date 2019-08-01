import React from 'react';
import {
  Table, Container, Row, Col,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const VipBonus = () => (
  <>
    <>
      <Container className="referral__container">
        <Row>
          <Col className="refer__col__one">
            <h5>
              <FormattedMessage id="data.copymyearningsvipbcontent" />
            </h5>
            <h6>
              <FormattedMessage id="data.headermyearningsvipoverview" />
            </h6>
            <Table striped className="merchant">
              <thead>
                <tr>
                  <th>
                    <FormattedMessage id="data.headermyearningsrfsignups" />
                  </th>
                  <th>
                    <FormattedMessage id="data.headermyearningsrfpotentialreferalbonus" />
                  </th>
                  <th>
                    <FormattedMessage id="data.headermyearningsvipbpotemtialtlc" />
                  </th>
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
              <FormattedMessage id="data.trackrftext" />
            </h6>
            <h6>
              <FormattedMessage id="data.headermyearningsrffriendsnetwork" />
            </h6>
            <Table striped className="merchant">
              <thead>
                <tr>
                  <th>
                    <FormattedMessage id="data.headermyearningsvipbusername" />
                  </th>
                  <th>
                    <FormattedMessage id="data.headermyearningsrffrineds" />
                  </th>
                  <th>
                    <FormattedMessage id="data.headermyearningsvipbupgradedate" />
                  </th>
                  <th>
                    <FormattedMessage id="data.headermyearningsvipbvip" />
                  </th>
                  <th>
                    <FormattedMessage id="data.headermyearningsvipbvipbonus" />
                  </th>
                  <th>
                    <FormattedMessage id="data.headermyearningsviptlcreward" />
                  </th>
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

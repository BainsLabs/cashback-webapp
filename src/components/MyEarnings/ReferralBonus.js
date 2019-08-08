import React from 'react';
import {
  Container, Col, Row, Table,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const ReferBonus = () => (
  <>
    <Container className="referral__container">
      <Row>
        <Col className="refer__col__one">
          <h5>
            <FormattedMessage id="data.rfbonustext" />
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
                <td>-</td>
                <td>$</td>
                <td>$</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col className="refer__col__one">
          <h5>
            <FormattedMessage id="data.trackrftext" />
          </h5>
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
                  <FormattedMessage id="data.headermyearningsrfjoindate" />
                </th>
                <th>
                  <FormattedMessage id="data.headermyearningsrfcashbackpending" />
                </th>
                <th>
                  <FormattedMessage id="data.headermyearningsrfcashbackpaid" />
                </th>
                <th>
                  <FormattedMessage id="data.headermyearningsrfreferralbonus" />
                </th>
                <th>
                  <FormattedMessage id="data.headermyearningsviptlcreward" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>$</td>
                <td>$</td>
                <td>$</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </>
);

export default ReferBonus;

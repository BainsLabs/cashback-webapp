import React from 'react';
import {
  Container, Table, Col, Row,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const VipCashBack = () => (
  <>
    <Container className="filter">
      <ul>
        <li>
          <FormattedMessage id="data.headermyearningsvipfilter" />
        </li>
        <li>
          <FormattedMessage id="data.headermyearningspending" />
          &nbsp;
          <input type="checkbox" className="checkbox" />
        </li>
        <li>
          <FormattedMessage id="data.headermyearningsvipdeclined" />
          &nbsp;
          <input type="checkbox" className="checkbox" />
        </li>
        <li>
          <FormattedMessage id="data.headermyearningsvippaid" />
          &nbsp;
          <input type="checkbox" className="checkbox" />
        </li>
      </ul>
    </Container>
    <Container className="merchant__container">
      <Table striped className="merchant">
        <thead>
          <tr>
            <th>
              <FormattedMessage id="data.headermyearningsvipmerchant" />
            </th>
            <th>
              <FormattedMessage id="data.headermyearningsdate" />
            </th>
            <th>
              <FormattedMessage id="data.headermyearningspurchase" />
            </th>
            <th>
              <FormattedMessage id="data.sortmenuSCCashBack" />
            </th>
            <th>
              <FormattedMessage id="data.headermyearningstlcreward" />
            </th>
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
          <p>
            <FormattedMessage id="data.headermyearningsvipqualifiedwelcomegift" />
          </p>
          <p>
            <FormattedMessage id="data.headermyearningsvipmerchant" />
: 4444
          </p>
        </Col>
        <Col md={3}>
          <p>
            <FormattedMessage id="data.headermyearningsvipoffernumber" />
          </p>
          <p>GA345Gw</p>
        </Col>
        <Col md={3}>
          <p>
            <FormattedMessage id="data.headermyearningsorderid" />
          </p>
          <p>xxxxxxxxx4444</p>
        </Col>
        <Col md={3}>
          <p>
            <FormattedMessage id="data.headermyearningsvipviptier" />
          </p>
          <p>5%</p>
        </Col>
      </Row>
    </Container>
    <Container className="term__container">
      <Row>
        <Col md={4}>
          <h6>
            <FormattedMessage id="data.copymyearningsvip5" />
          </h6>
          <p>
            <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonusyouareavip" />
          </p>
        </Col>
        <Col md={4}>
          <h6>
            <FormattedMessage id="data.copymyearningsvip10" />
          </h6>
          <p>
            <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonus10" />
          </p>
        </Col>
        <Col md={4}>
          <h6>
            <FormattedMessage id="data.copymyearningsvip20" />
          </h6>
          <p>
            <FormattedMessage id="data.copymyearningsviphelp" />
          </p>
        </Col>
      </Row>
    </Container>
  </>
);

export default VipCashBack;

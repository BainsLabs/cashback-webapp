import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default () => (
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
          <tr>
            <td>1</td>
            <td>04 july 2019</td>
            <td>$100</td>
            <td>$15</td>
            <td>4</td>
          </tr>
          <tr>
            <td>1</td>
            <td>04 july 2019</td>
            <td>$100</td>
            <td>$15</td>
            <td>4</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </>
);

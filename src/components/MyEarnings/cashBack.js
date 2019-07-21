import React from 'react';
import { Container, Table } from 'react-bootstrap';

export default () => (
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

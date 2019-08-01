import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const FriendShipTable = (props) => {
  const { className, degreeTeam } = props;
  return (
    <Container>
      <Row>
        <Table striped className={className || 'friendship__table'}>
          <thead>
            <tr>
              <th>
                <FormattedMessage id="data.headermyearningsrffrineds" />
              </th>

              <th>
                <FormattedMessage id="data.headermyearningsrfcashbackpending" />
              </th>
              <th>
                <FormattedMessage id="data.fbpending" />
              </th>
              <th>
                <FormattedMessage id="data.fbpaid" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
1
              </td>
              <td>{degreeTeam[0]}</td>
              <td>$250</td>
              <td>$12.5</td>
              <td>$5</td>
              <td>+</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
2
              </td>
              <td>{degreeTeam[1]}</td>
              <td>$100</td>
              <td>$50</td>
              <td>$10</td>
              <td>+</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
3
              </td>
              <td>{degreeTeam[2]}</td>
              <td>$5000</td>
              <td>$250</td>
              <td>$50</td>
              <td>+</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
4
              </td>
              <td>{degreeTeam[3]}</td>
              <td>$20000</td>
              <td>$1000</td>
              <td>$200</td>
              <td>+</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
5
              </td>
              <td>{degreeTeam[4]}</td>
              <td>$100000</td>
              <td>$5000</td>
              <td>$1000</td>
              <td>+</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
6
              </td>
              <td>{degreeTeam[5]}</td>
              <td>$40000</td>
              <td>$20000</td>
              <td>$3000</td>
              <td>+</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default FriendShipTable;

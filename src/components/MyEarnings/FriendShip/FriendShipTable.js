import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const FriendShipTable = (props) => {
  const { className, degreeTeam } = props;
  console.log(degreeTeam, 'DT');
  return (
    <Container>
      <Row>
        <Table striped className={className || 'friendship__table'}>
          <thead>
            <tr>
              <th>
                <FormattedMessage id="data.degree" />
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
              <td>{degreeTeam.length === 0 ? '' : degreeTeam[0]}</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
2
              </td>
              <td>{degreeTeam.length === 0 ? '' : degreeTeam[1]}</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
3
              </td>
              <td>{degreeTeam.length === 0 ? '' : degreeTeam[2]}</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
4
              </td>
              <td>{degreeTeam.length === 0 ? '' : degreeTeam[3]}</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
5
              </td>
              <td>{degreeTeam.length === 0 ? '' : degreeTeam[4]}</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="data.degree" />
                {' '}
6
              </td>
              <td>{degreeTeam.length === 0 ? '' : degreeTeam[5]}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default FriendShipTable;

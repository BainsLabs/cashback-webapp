import React from 'react';
import Banner from 'components/common/Banner';
import {
  Container, Row, Col, Table,
} from 'react-bootstrap';
import { cloudfrontUrl } from 'utils/uitility';
import { FormattedMessage } from 'react-intl';

const FavMerchant = () => {
  return (
    <>
      <Banner imgSrc={cloudfrontUrl('images/my-earning/favmerchants.png')} textPosition="center">
        <h2 className="vipbanner-text">
          <FormattedMessage id="data.favmerchants" />
        </h2>
      </Banner>
      <Container>
        <Row>
          <Col>
            <Container className="profile__container">
              <h3>
                <FormattedMessage id="data.myfavmerchants" />
              </h3>

              <Table striped responsive className="favmerchant text-center">
                <thead>
                  <tr>
                    <th>
                      <FormattedMessage id="data.retailer" />
                    </th>
                    <th>
                      <FormattedMessage id="data.totalspend" />
                    </th>
                    <th>
                      <FormattedMessage id="data.totalcashback" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FavMerchant;

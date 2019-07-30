import React, { Component } from 'react';
import {
  Container, Row, Col, Table,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import CalculatorModal from './calculator/calculatorModal';

class FriendShipBonus extends Component {
  state = {
    open: false,
  };

  ModalOpen = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <Container className="friendShip__container">
          <Row>
            <Col md={6} className="friendship__amount">
              <div className="amount__container">
                <p className="amount">$2360</p>
                <p className="amount__text">
                  <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonuspaid" />
                </p>
              </div>
            </Col>
            <Col md={6} className="friendship__amount">
              <div className="amount__container">
                <p className="amount">$2360</p>
                <p className="amount__text">
                  <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonustotalfriends" />
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <button type="button" className="friendship__button">
                <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonus52" />
              </button>
            </Col>
            <Col>
              <button type="button" className="friendship__button" onClick={this.ModalOpen}>
                <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonusearningcalculator" />
              </button>
            </Col>
            <Col>
              <button type="button" className="friendship__button">
                <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonusteamdetails" />
              </button>
            </Col>
          </Row>
          <Row>
            <Col className="friendShip__detailtext">
              <h6>
                <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonus5" />
                {' '}
              </h6>
              <p>
                <FormattedMessage id="data.rfb5" />
              </p>
            </Col>
            {/* <Col className="friendShip__detailtext">
              <h6>Your referred VIPs 8</h6>
              <p>
                You are a VIP Member and qualify to receive 5% Friendship Bonus up to 6 Degrees of
                your friends network.
              </p>
            </Col> */}
            <Col className="friendShip__detailtext">
              <h6>
                {' '}
                <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonus" />
              </h6>
              <p>
                <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonus10" />
              </p>
            </Col>
            <Col className="friendShip__detailtext">
              <h6>
                <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonusqualify20" />
              </h6>
              <p>
                <FormattedMessage id="data.copyabovefriendshipbonusfriendshipbonus20" />
              </p>
            </Col>
          </Row>
          <Row>
            <Table striped className="friendship__table">
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
                  <td>Degree 1</td>
                  <td>25</td>
                  <td>$250</td>
                  <td>$12.5</td>
                  <td>$5</td>
                  <td>+</td>
                </tr>
                <tr>
                  <td>Degree 2</td>
                  <td>100</td>
                  <td>$100</td>
                  <td>$50</td>
                  <td>$10</td>
                  <td>+</td>
                </tr>
                <tr>
                  <td>Degree 3</td>
                  <td>500</td>
                  <td>$5000</td>
                  <td>$250</td>
                  <td>$50</td>
                  <td>+</td>
                </tr>
                <tr>
                  <td>Degree 4</td>
                  <td>2000</td>
                  <td>$20000</td>
                  <td>$1000</td>
                  <td>$200</td>
                  <td>+</td>
                </tr>
                <tr>
                  <td>Degree 5</td>
                  <td>10000</td>
                  <td>$100000</td>
                  <td>$5000</td>
                  <td>$1000</td>
                  <td>+</td>
                </tr>
                <tr>
                  <td>Degree 6</td>
                  <td>40000</td>
                  <td>$40000</td>
                  <td>$20000</td>
                  <td>$3000</td>
                  <td>+</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
        <CalculatorModal open={open} close={this.ModalOpen} />
      </>
    );
  }
}

export default FriendShipBonus;

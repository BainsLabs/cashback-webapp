import React, { Component } from 'react';
import {
  Container, Row, Col, Table,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import FriendShipTable from './FriendShipTable';

const FriendShipBonus = () => {
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
            <button type="button" className="friendship__button">
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
        <FriendShipTable />
      </Container>
    </>
  );
};

export default FriendShipBonus;

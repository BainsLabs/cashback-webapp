import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { cloudfrontUrl } from 'utils/uitility';
import ReactTooltip from 'react-tooltip';

const welcomeGift = () => (
  <Container className="welcomegift__section">
    <h6>
      <FormattedMessage id="data.welcomeGiftmessage" />
    </h6>
    <Row>
      <Col md={6} className="gift__section">
        <p>$5</p>
        <p>
          <FormattedMessage id="data.headermyearningspending" />
        </p>
      </Col>
      <Col md={6} className="gift__section__left">
        <p>5 TLC</p>
        <p>
          <FormattedMessage id="data.headermyearningspending" />
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={3} className="gift__section__two">
        <p>
          <FormattedMessage id="data.headermyearningspending" />
          &nbsp;
          <FormattedMessage id="data.sortmenuSCCashBack" />
        </p>
        <p>$</p>
      </Col>
      <Col md={3} className="gift__section__three">
        <p>
          <FormattedMessage id="data.headermyearningspaid" />
          &nbsp;
          <FormattedMessage id="data.sortmenuSCCashBack" />
        </p>
        <p>$</p>
      </Col>
      <Col md={3} className="gift__section__three">
        <p>
          <FormattedMessage id="data.total" />
          &nbsp;
          <FormattedMessage id="data.sortmenuSCCashBack" />
        </p>
        <p>$</p>
      </Col>
      <Col md={3} className="gift__section__three">
        <i data-tip="" data-for="tip" className="fas fa-info-circle" />
        <ReactTooltip id="tip">
          <FormattedMessage id="data.tooltiptext" />
        </ReactTooltip>
        &nbsp;
        <img
          src={cloudfrontUrl('images/my-earning/tooltip.png')}
          alt="progress"
          width="50px"
          height="50px"
        />
      </Col>
    </Row>
  </Container>
);

export default welcomeGift;

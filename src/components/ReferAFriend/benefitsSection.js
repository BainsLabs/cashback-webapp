import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TrackCard from 'static/icons-images/track-card-icon.png';
import InviteCard from 'static/icons-images/invite-card-icon.png';
import bonusCard from 'static/icons-images/bonus-card-icon.png';

import BenefitsCard from 'components/common/benefitscard';
import { FormattedMessage } from 'react-intl';

export default () => (
  <section>
    <Row>
      <BenefitsCard className="benefits" backgroundColor="#ffec8d">
        <Row>
          <Col xs={12} className="no-padding ">
            <span className="benefits__headingtext">
              <img src={InviteCard} alt="user-icon" />
            </span>
            <span className="benefits__title">
              <FormattedMessage id="data.boxrfinvite" />
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="benefits__text">
              <FormattedMessage id="data.invitefriend" />
            </p>
          </Col>
        </Row>
      </BenefitsCard>
    </Row>
    <Row>
      <BenefitsCard
        backgroundColor="#96c1eb"
        className="benefits"
        marginLeft="0rem"
        marginTop="0rem"
      >
        <Row>
          <Col xs={12} className="no-padding ">
            <span className="benefits__headingtext">
              <img src={TrackCard} alt="tracking" />
            </span>
            <span className="benefits__title">
              <FormattedMessage id="data.boxrf" />
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="benefits__text">
              <FormattedMessage id="data.trackperfomance" />
            </p>
          </Col>
        </Row>
      </BenefitsCard>
    </Row>
    <Row>
      <BenefitsCard backgroundColor="#99cdab" className="benefits">
        <Row>
          <Col xs={12} className="no-padding ">
            <span className="benefits__headingtext">
              <img src={bonusCard} alt="bonus" />
            </span>
            <span className="benefits__title">
              <FormattedMessage id="data.boxrfbonus" />
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="benefits__text">
              <FormattedMessage id="data.earnrb" />
            </p>
          </Col>
        </Row>
      </BenefitsCard>
    </Row>
  </section>
);

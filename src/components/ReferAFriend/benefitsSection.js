import React from "react";
import { Row, Col } from "react-bootstrap";
import TrackCard from "static/icons-images/track-card-icon.png";
import InviteCard from "static/icons-images/invite-card-icon.png";
import bonusCard from "static/icons-images/bonus-card-icon.png";

import BenefitsCard from "components/common/benefitscard";

export default () => (
  <section>
    <Row>
      <BenefitsCard className="benefits">
        <Row>
          <Col xs={12} className="no-padding ">
            <span className="benefits__headingtext">
              <img src={InviteCard} alt="user-icon" />
            </span>
            <span className="benefits__title">Invite a Friends</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="benefits__text">
              Dolor ullamco proident nulla magna sit culpa exercitation labore
              ad occaecat quis.
            </p>
          </Col>
        </Row>
      </BenefitsCard>
    </Row>
    <Row>
      <BenefitsCard
        color="white"
        backgroundColor="#272F3A"
        className="benefits"
        marginLeft="0rem"
        marginTop="0rem"
      >
        <Row>
          <Col xs={12} className="no-padding ">
            <span className="benefits__headingtext">
              <img src={TrackCard} alt="tracking" />
            </span>
            <span className="benefits__title">Track Performance</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="benefits__text">
              Dolor ullamco proident nulla magna sit culpa exercitation labore
              ad occaecat quis.
            </p>
          </Col>
        </Row>
      </BenefitsCard>
    </Row>
    <Row>
      <BenefitsCard backgroundColor="#43bae9" className="benefits">
        <Row>
          <Col xs={12} className="no-padding ">
            <span className="benefits__headingtext">
              <img src={bonusCard} alt="bonus" />
            </span>
            <span className="benefits__title">Earn Referral Bonus</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="benefits__text">
              Dolor ullamco proident nulla magna sit culpa exercitation labore
              ad occaecat quis.
            </p>
          </Col>
        </Row>
      </BenefitsCard>
    </Row>
  </section>
);

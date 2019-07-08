import React from "react";
import { Row, Col } from "react-bootstrap";
import { faUserFriends, faCoins } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BenefitsCard from "components/common/benefitscard";

const BenefitsSection = () => (
  <section>
    <Row>
      <BenefitsCard>
        <p className="text-center text-uppercase benefits__headingtext">
          <FontAwesomeIcon icon={faUserFriends} />
          &nbsp;Invite a Friends
        </p>
        <p className="benefits__text">
          Help your friends join YOE free of cos and start saving money. On
          average on emay save over $100s per year
        </p>
      </BenefitsCard>
    </Row>
    <Row>
      <BenefitsCard color="white" backgroundColor="#272F3A">
        <p className="text-center text-uppercase benefits__headingtext">
          <FontAwesomeIcon icon={faUserFriends} />
          &nbsp;Track Performance
        </p>
        <p className="benefits__text">
          You can track invitation and saving performance of your friends . Go to My Account > MyEarnings > Referral Bonus
        </p>
      </BenefitsCard>
    </Row>
    <Row>
      <BenefitsCard backgroundColor="#43bae9">
        <p className="text-center text-uppercase benefits__headingtext">
          <FontAwesomeIcon icon={faCoins} />
          &nbsp;Earn Referral Bonus
        </p>
        <p className="benefits__text">
          You will receive $5 and 10 TLC for helping your friends save $25. There is no limit of this Referral Bonus, keep spread the good word
        </p>
      </BenefitsCard>
    </Row>
  </section>
);

export default BenefitsSection;

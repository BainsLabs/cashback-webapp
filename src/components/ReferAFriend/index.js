import React from "react";
import { Row, Col } from "react-bootstrap";
import ReferFriendSection from "components/ReferAFriend/ReferFriendSection/index";
import Banner from "components/common/Banner";
import referbanner from "static/icons-images/refer.jpg";
import BenefitsSection from "components/ReferAFriend/benefitsSection";

const ReferFriend = () => (
  <section className="referfriend__container">
    <Banner imgSrc={referbanner} height="40rem" />
    <div className="container">
      <Row>
        <Col md={8}>
          <ReferFriendSection />
        </Col>
        <Col md={4}>
          <BenefitsSection />
        </Col>
      </Row>
    </div>
  </section>
);

export default ReferFriend;

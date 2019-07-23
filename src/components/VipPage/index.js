import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Banner from "components/common/Banner";
import vipImage from "static/images/vip-banefits/vip.jpg";
import VipBanner from "static/images/vip-banefits/banner.jpg";
import BenefitsCard from "components/common/benefitscard";

const VipPage = () => (
  <>
    <Banner imgSrc={VipBanner} className="banner-padding" textPosition="center">
      <h3>Unlock a World of Possibilities</h3>
    </Banner>
    <Container className="text-center vip__container">
      <Row>
        <Col md={6}>
          <img src={vipImage} alt="vipImage" className="vip__image"/>
        </Col>
        <Col md={6} className="vip__desc text-left">
          <h3>Enjoy Extra Benefits as a VIP!</h3>
          <p>
            Upgrading to VIP Membership unlocks three VIP Benefits for you. As a
            VIP Member you save more money with VIP Cash Back. Get VIP Bonuses
            when your friends upgrade to VIP and receive Friendship Bonuses when
            your friends and their friends save money shopping.
          </p>
          <p className="bluetext">All these benefits for only $25!</p>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="vip__benefits">
          <BenefitsCard
            backgroundColor="#ffec8d"
            className="vip__benfits text-left"
          >
            <p className="vip__text">Featured Brands</p>
            <p className="vip__benefitdesc">
              Earn Even More Cash Back on Brands You Love
            </p>
          </BenefitsCard>
        </Col>
        <Col md={3} className="vip__benefits">
          <BenefitsCard
            backgroundColor="#96c1eb"
            className="vip__benfits text-left"
          >
            <p className="vip__text">Extra 2% Vip</p>
            <p className="vip__benefitdesc">Cash Back on 30+ categories</p>
          </BenefitsCard>
        </Col>

        <Col md={3} className="vip__benefits">
          <BenefitsCard
            backgroundColor="#f7e4e4"
            className="vip__benfits text-left"
          >
            <p className="vip__text">Flexible Payment Options</p>
          </BenefitsCard>
        </Col>
        <Col md={3} className="vip__benefits">
          <BenefitsCard
            backgroundColor="#b7bfcd"
            className="vip__benfits text-left"
          >
            <p className="vip__text">Travel</p>
            <p className="vip__benefitdesc">
              Up to 60% off your hotel stay plus 6% Cash Back
            </p>
          </BenefitsCard>
        </Col>
      </Row>
    </Container>
  </>
);

export default VipPage;

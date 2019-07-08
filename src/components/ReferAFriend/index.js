import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReferFriendSection from 'components/ReferAFriend/ReferFriendSection/index';
import Banner from 'components/common/Banner';
import referbanner from 'static/icons-images/banner.jpg';
import BenefitsSection from 'components/ReferAFriend/benefitsSection';

export default () => (
  <section className="referfriend__container">
    <Banner imgSrc={referbanner} textPosition="center">
      <Container>
        <div className="refer-a-friend__banner">
          <h3>Help your friends save and</h3>
          <h3>you will get $5 referal bonus</h3>
        </div>
      </Container>
    </Banner>
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

import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReferFriendSection from 'components/ReferAFriend/ReferFriendSection/index';
import Banner from 'components/common/Banner';
import referbanner from 'static/images/referAfriend/banner.jpg';
import BenefitsSection from 'components/ReferAFriend/benefitsSection';
import { FormattedMessage } from 'react-intl';

export default () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <section className="referfriend__container">
      <Banner imgSrc={referbanner} textPosition="center">
        <Container>
          <div className="refer-a-friend__banner">
            <h3>
              <FormattedMessage id="data.bannerrf" />
            </h3>
          </div>
        </Container>
      </Banner>
      <div className="container">
        <Row>
          <Col md={8} xs={12}>
            <ReferFriendSection />
          </Col>
          <Col md={4} xs={12}>
            <BenefitsSection />
          </Col>
        </Row>
      </div>
    </section>
  );
};

import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { cloudfrontUrl } from 'utils/uitility';
import ReferFriendSection from 'components/ReferAFriend/ReferFriendSection/index';
import Banner from 'components/common/Banner';
import BenefitsSection from 'components/ReferAFriend/benefitsSection';
import { FormattedMessage } from 'react-intl';

export default () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <section className="referfriend__container">
      <Banner imgSrc={cloudfrontUrl('images/referAfriend/banner.jpg')} textPosition="center">
        <Container>
          <div className="refer-a-friend__banner">
            <h3 className="vipbanner-text text-center">
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

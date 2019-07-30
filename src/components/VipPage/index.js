import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Banner from 'components/common/Banner';
import vipImage from 'static/images/vip-banefits/vip.jpg';
import VipBanner from 'static/images/vip-banefits/banner.jpg';
import BenefitsCard from 'components/common/benefitscard';
import { FormattedMessage } from 'react-intl';

const VipPage = () => (
  <>
    <Banner imgSrc={VipBanner} className="banner-padding" textPosition="center">
      <h3>
        <FormattedMessage id="data.vipbanner" />
      </h3>
    </Banner>
    <Container className="text-center vip__container">
      <Row>
        <Col md={6}>
          <img src={vipImage} alt="vipImage" className="vip__image" />
        </Col>
        <Col md={6} className="vip__desc text-left">
          <h3>
            <FormattedMessage id="data.enjoyVip" />
          </h3>
          <p>
            <FormattedMessage id="data.vipdesc" />
          </p>
          <p className="bluetext">
            <FormattedMessage id="data.blueText" />
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="vip__benefits">
          <BenefitsCard backgroundColor="#ffec8d" className="vip__benfits text-left">
            <p className="vip__text">
              <FormattedMessage id="data.featuredbrands" />
            </p>
            <p className="vip__benefitdesc">
              <FormattedMessage id="data.featuretext" />
            </p>
          </BenefitsCard>
        </Col>
        <Col md={3} className="vip__benefits">
          <BenefitsCard backgroundColor="#96c1eb" className="vip__benfits text-left">
            <p className="vip__text">
              <FormattedMessage id="data.extravip" />
            </p>
            <p className="vip__benefitdesc">
              <FormattedMessage id="data.extraviptext" />
            </p>
          </BenefitsCard>
        </Col>

        <Col md={3} className="vip__benefits">
          <BenefitsCard backgroundColor="#f7e4e4" className="vip__benfits text-left">
            <p className="vip__text">
              <FormattedMessage id="data.flexible" />
            </p>
          </BenefitsCard>
        </Col>
        <Col md={3} className="vip__benefits">
          <BenefitsCard backgroundColor="#b7bfcd" className="vip__benfits text-left">
            <p className="vip__text">
              <FormattedMessage id="data.HPtravel" />
            </p>
            <p className="vip__benefitdesc">
              <FormattedMessage id="data.traveltext" />
            </p>
          </BenefitsCard>
        </Col>
      </Row>
    </Container>
  </>
);

export default VipPage;

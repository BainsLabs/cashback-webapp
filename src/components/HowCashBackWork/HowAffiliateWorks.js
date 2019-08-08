import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { CashbackImg } from 'constants/cashbackimg';
import { FormattedMessage } from 'react-intl';
import howcashback from 'static/images/cashback/howcashbackwork.png';
import howcashbackchin from 'static/images/cashback/chinesehowcashback.png';
import savemoney from 'static/images/cashback/savemoney.png';
import savemoneychi from 'static/images/cashback/chinesesavemoney.png';
import welcomegift from 'static/images/cashback/welcomegift.png';
import welcomegiftchi from 'static/images/cashback/chinesewelcomegift.png';
import referal from 'static/images/cashback/referal-bonus.png';
import referalchi from 'static/images/cashback/chinesereferbonus.png';

const HowAffiliateWorks = () => {
  const language = localStorage.getItem('country');
  return (
    <>
      <section>
        <Container className="text-center">
          <Row>
            <Col className="affiliate__intro">
              <h1 className="font-weight-bold text-uppercase">
                <FormattedMessage id="data.headerhc" />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <img
                src={language === 'en-US' ? howcashback : howcashbackchin}
                alt="refer bonus"
                className="howcashback__img"
              />
            </Col>
            <Col md={5} className="howcashback__text">
              <FormattedMessage id="data.cashbacktext" />
            </Col>
          </Row>
          <Row>
            <Col className="affiliate__intro">
              <h1 className="font-weight-bold text-uppercase text-center">
                <FormattedMessage id="data.savemoneyTitle" />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={5} className="howcashback__text">
              <FormattedMessage id="data.savemoney" />
            </Col>
            <Col md={7}>
              <img
                src={language === 'en-US' ? savemoney : savemoneychi}
                alt="refer bonus"
                className="howcashback__img"
              />
            </Col>
          </Row>
          <Row>
            <Col className="affiliate__intro">
              <h1 className="font-weight-bold text-uppercase">
                <FormattedMessage id="data.getWelcomeGift" />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <img
                src={language === 'en-US' ? welcomegift : welcomegiftchi}
                alt="refer bonus"
                className="howcashback__img"
              />
            </Col>
            <Col md={4} className="howcashback__text">
              <FormattedMessage id="data.welcomegiftText" />
            </Col>
          </Row>
          <Row>
            <Col className="affiliate__intro">
              <h1 className="font-weight-bold text-uppercase">
                <FormattedMessage id="data.receivereferral" />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="howcashback__text">
              <FormattedMessage id="data.receivetext" />
            </Col>
            <Col md={8}>
              <img
                src={language === 'en-US' ? referal : referalchi}
                alt="refer bonus"
                className="howcashback__img"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HowAffiliateWorks;

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { cloudfrontUrl } from 'utils/uitility';
import { FormattedMessage } from 'react-intl';

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
                src={
                  language === 'en-US'
                    ? cloudfrontUrl('images/cashback/howcashbackwork.png')
                    : cloudfrontUrl('images/cashback/chinesehowcashback.png')
                }
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
              <p>
                <FormattedMessage id="data.savemoney" />
              </p>
            </Col>
            <Col md={7}>
              <img
                src={
                  language === 'en-US'
                    ? cloudfrontUrl('images/cashback/savemoney.png')
                    : cloudfrontUrl('images/cashback/chinesesavemoney.png')
                }
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
                src={
                  language === 'en-US'
                    ? cloudfrontUrl('images/cashback/welcomegift.png')
                    : cloudfrontUrl('images/cashback/chinesewelcomegift.png')
                }
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
                src={
                  language === 'en-US'
                    ? cloudfrontUrl('images/cashback/referal-bonus.png')
                    : cloudfrontUrl('images/cashback/chinesereferbonus.png')
                }
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

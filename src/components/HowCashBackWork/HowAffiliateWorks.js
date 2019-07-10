import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { CashbackImg } from 'constants/cashbackimg';

const HowAffiliateWorks = () => (
  <>
    <section>
      <Container className="text-center">
        <Row>
          <Col className="affiliate__intro">
            <h1 className="font-weight-bold text-uppercase">How does Affiliate Marketing Work?</h1>
          </Col>
        </Row>
        <Row>
          {CashbackImg.map(image => (
            <Col md={3} className="text-left">
              <Col className="affiliate__img no-padding">
                <img src={image.path} alt={image.alt} height="90px" />
              </Col>
              <div className="affiliate__border" />
              <Col className="affiliate__step font-weight-bold text-uppercase no-padding">
                {image.step}
              </Col>
              <Col className="affiliate__text no-padding text-sm-left">{image.description}</Col>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </>
);

export default HowAffiliateWorks;

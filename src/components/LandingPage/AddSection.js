import React from 'react';
import Card from 'components/common/Card';
import CardContent from 'components/common/CardContent';
import { adds, members } from 'constants/adds';
import { Row, Col, Container } from 'react-bootstrap';
import uuidv1 from 'uuid';

export default () => (
  <div className="add-section">
    <Container>
      <Row>
        <Col className="add-section__heading">
          <h2>TODAY&apos;S TOP COUPONS & OFFERS</h2>
          <ul>
            <li>MOST USED</li>
            <li>RECHARGE</li>
            <li>FOOD</li>
            <li>TRAVEL</li>
            <li>FASHION</li>
            <li>ELECTRONICS</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Row>
            {adds.map(item => (
              <Col xs={12} md={6} lg={4} className="mb-2" key={uuidv1()}>
                <Card
                  classValue="card__content-hover"
                  backgroundImage={item.bgImg}
                  textPosition="center"
                  border
                  width="15rem"
                >
                  <CardContent brandLogo={item.icon} data={item} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={4}>
          <Row>
            {members.map(item => (
              <Col lg={12} key={uuidv1()} className="mb-2">
                <Card
                  classValue="card__content-hover"
                  backgroundColor="#272F3A"
                  textPosition="center"
                  border
                  width="15rem"
                >
                  <div className="card__add-section">
                    <img src={item.image} alt="brand" />
                    <br />
                    <button type="button">{item.btnText}</button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

import React from 'react';
import Card from 'components/common/Card';
import CardContent from 'components/common/CardContent';
import KFC from 'static/icons-images/kfc-bg.jpg';
import kfcLOGO from 'static/icons-images/kfc-logo.png';
import { Row, Col, Container } from 'react-bootstrap';

export default () => (
  <div className="add-section">
    <Container>
      <Row>
        <Col className="add-section__heading">
          <h2>TODAY&apos;S TOP COUPONS & OFFERS</h2>
        </Col>
      </Row>
      <Card
        classValue="card__content-hover"
        backgroundImage={KFC}
        textPosition="center"
        border
        width="15rem"
      >
        <CardContent brandLogo={kfcLOGO} />
      </Card>
    </Container>
  </div>
);

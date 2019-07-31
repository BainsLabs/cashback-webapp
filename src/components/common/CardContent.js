import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default (props) => {
  const { brandLogo, data } = props;
  return (
    <>
      <div className="card__container">
        <Row className="hidden-content">
          <Col lg={5} className="no-padding">
            <p className="cashback-percentage">{data.cahsback}</p>
            <p className="cashback-offer">{data.offerType}</p>
          </Col>
          <Col lg={4}>
            <p className="cashback-TLC">{data.tlc}</p>
          </Col>
          <Col lg={3}>
            <img src={brandLogo} alt="KFC-LOGO" className="card__content-image" />
          </Col>
        </Row>
        <Row className="hover-content">
          <Col lg={12} className="no-padding">
            <p className="cashback-percentage">{data.cahsback}</p>
            <p className="cashback-offer">{data.offerType}</p>
          </Col>
          <Col lg={12}>
            <p className="cashback-TLC">{data.tlc}</p>
          </Col>
          <Col lg={12}>
            <img src={brandLogo} alt="KFC-LOGO" className="card__content-image" />
          </Col>
        </Row>
      </div>
    </>
  );
};

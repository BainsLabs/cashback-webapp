import React from "react";
import { Row, Col } from "react-bootstrap";

export default props => {
  const { brandLogo, data } = props;
  return (
    <>
      <div className="card__container pb-2">
        <Row className="hidden-content">
          <Col lg={5} className="no-padding">
            <p className="cashback-percentage">
              <span className="cashback-offer">{data.cashbackText}</span>
              <span>{data.cahsback}</span>
            </p>
            <p className="cashback-offer">{data.offerType}</p>
          </Col>
          <Col lg={3} className="no-padding">
            <p className="cashback-percentage">{data.tlc}</p>
            <p className="cashback-offer">{data.tlcText}</p>
          </Col>
          <Col lg={4} className="no-padding">
            <img
              src={brandLogo}
              alt="KFC-LOGO"
              className="card__content-image"
            />
          </Col>
        </Row>
        <Row className="hover-content">
          <Col lg={12}>
            <img
              src={brandLogo}
              alt="KFC-LOGO"
              className="card__content-image-hover"
            />
          </Col>
          <Col lg={12} className="no-padding">
            <p className="cashback-hover-text-border">
              <span>{data.cahsback}</span>
              &nbsp;
              <span className="hover-offerType">{data.offerType}</span>
            </p>
          </Col>
          <Col lg={12}>
            <span className="cashback-percentage">{data.tlc}</span>
            {/* &nbsp; */}
            <span>{data.tlcText}</span>
          </Col>
        </Row>
      </div>
    </>
  );
};

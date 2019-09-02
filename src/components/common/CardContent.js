import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default (props) => {
  const { brandLogo, data } = props;
  return (
    <>
      <div className="card__container pb-2">
        <Row className="hidden-content">
          <Col xs={6} lg={brandLogo ? 7 : 6} className={brandLogo ? 'no-padding' : ''}>
            <p className="cashback-percentage">
              {brandLogo ? <span className="cashback-offer">{data.cashbackText}</span> : ''}
              <span>{data.cahsback}</span>
            </p>
            {brandLogo ? (
              <p className="cashback-offer">{data.offerType}</p>
            ) : (
              <span className="cashback-offer">{data.cashbackText}</span>
            )}
          </Col>
          <Col
            xs={brandLogo ? 3 : 6}
            lg={brandLogo ? 3 : 6}
            className={brandLogo ? 'no-padding' : 'text-center'}
          >
            <p className="cashback-percentage">{data.tlc}</p>
            <p className="cashback-offer">{data.tlcText}</p>
          </Col>
          {brandLogo ? (
            <Col xs={3} lg={2} className="no-padding">
              <img src={brandLogo} alt="KFC-LOGO" className="card__content-image" />
            </Col>
          ) : (
            ''
          )}
        </Row>
        <Row className="hover-content">
          {brandLogo ? (
            <Col lg={12}>
              <img src={brandLogo} alt="KFC-LOGO" className="card__content-image-hover" />
            </Col>
          ) : (
            <span className="hover-offerType">{data.offerType}</span>
          )}

          <Col lg={12} className="no-padding">
            <p className="cashback-hover-text-border">
              <span>{data.cahsback}</span>
              &nbsp;
              {brandLogo ? <span className="hover-offerType">{data.offerType}</span> : ''}
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

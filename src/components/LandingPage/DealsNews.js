import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HP from 'static/images/home-page/tlc-logo1.png';
import newsImage from 'static/icons-images/news-img1.jpg';
import HP2 from 'static/images/home-page/tlc-logo2.png';
import { FormattedMessage } from 'react-intl';

export default () => (
  <Row className="deals-news">
    <Col className="deals__section no-padding" lg={9}>
      <span className="deals__section-heading">
        <FormattedMessage id="data.HPhotdeals" />
      </span>
      <button type="button" className="text-white float-right deals__section-see-all">
        <FormattedMessage id="data.HPseeall" />
      </button>
      <Row className="deals__section-content">
        <Col md={4}>
          <img src={HP} alt="hp-logo" />
        </Col>
        <Col md={8}>
          <p>
            <FormattedMessage id="data.LPDEals" />
          </p>
          <button type="button">
            <FormattedMessage id="data.HPshopnow" />
          </button>
        </Col>
      </Row>
      <Row className="deals__section-content">
        <Col md={4}>
          <img src={HP2} alt="hp-logo" />
        </Col>
        <Col md={8}>
          <p>
            <FormattedMessage id="data.delasNewsLP1" />
          </p>
          <button type="button">
            <FormattedMessage id="data.HPshopnow" />
          </button>
        </Col>
      </Row>
    </Col>
    <Col lg={3}>
      <div className="news__section no-padding">
        <span className="news__section-heading">NEWS</span>
        <button type="button" className="text-white float-right news__section-see-all">
          <FormattedMessage id="data.HPseeall" />
        </button>
        <Row className="news__section-content">
          <Col md={5} className="no-padding">
            <img src={newsImage} alt="newsimage" />
          </Col>
          <Col md={7}>
            <p>Ullamco est sit ipsum incididunt.Deserunt laboris consequat</p>
            <span>
              <i className="far fa-clock" />
            </span>
            <span>01 July 2019</span>
          </Col>
        </Row>
        <Row className="news__section-content">
          <Col md={5} className="no-padding">
            <img src={newsImage} alt="newsimage" />
          </Col>
          <Col md={7}>
            <p>Ullamco est sit ipsum incididunt.Deserunt laboris consequat</p>
            <span>
              <i className="far fa-clock" />
            </span>
            <span>01 July 2019</span>
          </Col>
        </Row>
        <Row className="news__section-content">
          <Col md={5} className="no-padding">
            <img src={newsImage} alt="newsimage" />
          </Col>
          <Col md={7}>
            <p>Ullamco est sit ipsum incididunt.Deserunt laboris consequat</p>
            <span>
              <i className="far fa-clock" />
            </span>
            <span>01 July 2019</span>
          </Col>
        </Row>
        <Row className="news__section-content">
          <Col md={5} className="no-padding">
            <img src={newsImage} alt="newsimage" />
          </Col>
          <Col md={7}>
            <p>Ullamco est sit ipsum incididunt.Deserunt laboris consequat</p>
            <span>
              <i className="far fa-clock" />
            </span>
            <span>01 July 2019</span>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
);

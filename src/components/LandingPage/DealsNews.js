import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HP from 'static/icons-images/hp.jpg';
import newsImage from 'static/icons-images/news-img1.jpg';
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
        <Col md={1}>
          <img src={HP} alt="hp-logo" />
        </Col>
        <Col md={11}>
          <span className="deals__section-cashback">
            +4.0 %
            {' '}
            <FormattedMessage id="data.headermyearningsvipcashback" />
          </span>

          <span className="float-right ">
            <FormattedMessage id="data.HPcode" />
            &nbsp;
            <span className="deals__section-code">JULY 2019</span>
          </span>
          <p>
            Dolore minim labore cupidatat veniam laborum cillum id dolor. Tempor velit voluptate qui
            qui ad anim reprehenderit aute amet ex nulla dolore dolor dolore. Labore nostrud
            proident aliqua reprehenderit Lorem. Dolore tempor qui consequat esse ullamco nulla qui
            cillum fugiat. Occaecat non Lorem labore pariatur proident cupidatat nisi nulla eiusmod
            nostrud nisi cupidatat. Elit occaecat duis deserunt et ea magna exercitation.
          </p>
          <button type="button">
            <FormattedMessage id="data.HPshopnow" />
          </button>
        </Col>
      </Row>
      <Row className="deals__section-content">
        <Col md={1}>
          <img src={HP} alt="hp-logo" />
        </Col>
        <Col md={11}>
          <span className="deals__section-cashback">
            +4.0 %
            {' '}
            <FormattedMessage id="data.headermyearningsvipcashback" />
          </span>

          <span className="float-right ">
            <FormattedMessage id="data.HPcode" />
            <span className="deals__section-code">JULY 2019</span>
          </span>
          <p>
            Dolore minim labore cupidatat veniam laborum cillum id dolor. Tempor velit voluptate qui
            qui ad anim reprehenderit aute amet ex nulla dolore dolor dolore. Labore nostrud
            proident aliqua reprehenderit Lorem. Dolore tempor qui consequat esse ullamco nulla qui
            cillum fugiat. Occaecat non Lorem labore pariatur proident cupidatat nisi nulla eiusmod
            nostrud nisi cupidatat. Elit occaecat duis deserunt et ea magna exercitation.
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
          SEE All
        </button>
        <Row className="news__section-content">
          <Col md={5} className="no-padding">
            <img src={newsImage} alt="newsimage" />
          </Col>
          <Col md={7}>
            <p>
              Ullamco est sit ipsum incididunt.Deserunt laboris consequat non et esse incididunt
              officia ullamco ipsum.
            </p>
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
            <p>
              Ullamco est sit ipsum incididunt.Deserunt laboris consequat non et esse incididunt
              officia ullamco ipsum.
            </p>
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
            <p>
              Ullamco est sit ipsum incididunt.Deserunt laboris consequat non et esse incididunt
              officia ullamco ipsum.
            </p>
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
            <p>
              Ullamco est sit ipsum incididunt.Deserunt laboris consequat non et esse incididunt
              officia ullamco ipsum.
            </p>
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

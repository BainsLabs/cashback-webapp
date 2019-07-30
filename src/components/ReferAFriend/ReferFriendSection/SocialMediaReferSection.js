import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Wechat from 'static/icons-images/weixin-brands.svg';
import fb from 'static/icons-images/facebook-brands.svg';
import instagram from 'static/icons-images/instagram-brands.svg';
import linkedIn from 'static/icons-images/linkedin-brands.svg';
import pinterest from 'static/icons-images/pinterest-brands.svg';
import twitter from 'static/icons-images/twitter-brands.svg';
import whatsapp from 'static/icons-images/whatsapp-brands.svg';
import { FormattedMessage } from 'react-intl';

export default () => (
  <div className="refer__link">
    <Row>
      <Col className="text-center">
        <h1 className="text-uppercase font-weight-bold">2:</h1>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <h5 className="font-weight-bold">
          <FormattedMessage id="data.copyrfshareonsocialmedia" />
        </h5>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <ul className="social__list">
          <li>
            <img src={Wechat} alt="wechat" className="refer__social" />
          </li>
          <li>
            <img src={instagram} alt="instagram" className="refer__social" />
          </li>
          <li>
            <img src={whatsapp} alt="whatsapp" className="refer__social" />
          </li>
          <li>
            <img src={twitter} alt="twitter" className="refer__social" />
          </li>
          <li>
            <img src={fb} alt="fb" className="refer__social" />
          </li>
          <li>
            <img src={linkedIn} alt="linkedIn" className="refer__social" />
          </li>
          <li>
            <img src={pinterest} alt="pinterest" className="refer__social" />
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <h6 className="muted mt-3 text-center refer__text">
          <FormattedMessage id="data.socialText" />
        </h6>
      </Col>
    </Row>
  </div>
);

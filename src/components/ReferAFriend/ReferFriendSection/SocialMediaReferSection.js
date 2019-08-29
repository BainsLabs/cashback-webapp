import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { cloudfrontUrl } from 'utils/uitility';
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
            <img
              src={cloudfrontUrl('icons-images/weixin-brands.svg')}
              alt="wechat"
              className="refer__social"
            />
          </li>
          <li>
            <img
              src={cloudfrontUrl('icons-images/instagram-brands.svg')}
              alt="instagram"
              className="refer__social"
            />
          </li>
          <li>
            <img
              src={cloudfrontUrl('icons-images/whatsapp-brands.svg')}
              alt="whatsapp"
              className="refer__social"
            />
          </li>
          <li>
            <img
              src={cloudfrontUrl('icons-images/twitter-brands.svg')}
              alt="twitter"
              className="refer__social"
            />
          </li>
          <li>
            <img
              src={cloudfrontUrl('icons-images/facebook-brands.svg')}
              alt="fb"
              className="refer__social"
            />
          </li>
          <li>
            <img
              src={cloudfrontUrl('icons-images/linkedin-brands.svg')}
              alt="linkedIn"
              className="refer__social"
            />
          </li>
          <li>
            <img
              src={cloudfrontUrl('icons-images/pinterest-brands.svg')}
              alt="pinterest"
              className="refer__social"
            />
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

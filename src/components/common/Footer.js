import React from 'react';
import uuidv1 from 'uuid/v1';
import logo from 'static/images/vip-banefits/footer-logo.png';
import { links } from 'constants/footerLinks';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default () => (
  <section className="footer">
    <Container>
      <Row>
        <Col lg={3}>
          <div className="footer__logo">
            <img src={logo} width="inherit" alt="logo" />
            <p className="footer__description">
              <FormattedMessage id="data.footerDesc" />
            </p>
            <div className="footer__social-icons">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
          </div>
        </Col>

        {links.map(item => (
          <Col key={uuidv1()} lg={3} className="footer__links">
            <ul>
              <li key={uuidv1()}>
                <h4 key={uuidv1()}>{item.heading}</h4>
              </li>
              <ul key={uuidv1()}>
                {item.link.map(link => (
                  <li key={uuidv1()}>
                    <a key={uuidv1()} href={link.url}>
                      {link.linkLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </ul>
          </Col>
        ))}
      </Row>
    </Container>
    <div className="footer__line" />
    <p className="footer-text">
      <FormattedMessage id="data.footerAllRights" />
    </p>
  </section>
);

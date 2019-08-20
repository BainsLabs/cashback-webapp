import React from 'react';
import uuidv1 from 'uuid/v1';
import logo from 'static/images/home-page/footer-logo(eng).png';
import logochi from 'static/images/home-page/footer-logo(chi).png';
import { links } from 'constants/footerLinks';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default () => {
  const language = localStorage.getItem('country');
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="footer__logo">
              <img src={language === 'en-US' ? logo : logochi} width="inherit" alt="logo" />
              <p className="footer__description">
                <FormattedMessage id="data.footerDesc" />
              </p>
              <div className="footer__social-icons">
                <a href="https://www.facebook.com/6Degrees.CASH/" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.instagram.com/6d.cash/" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://twitter.com/6degreesCash" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </Col>

          {links.map(item => (
            <Col key={uuidv1()} lg={4} className="footer__links">
              <ul>
                <li key={uuidv1()}>
                  <h4 key={uuidv1()}>{item.heading}</h4>
                </li>
                <ul key={uuidv1()} className={item.className}>
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
};

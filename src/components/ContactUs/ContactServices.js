import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Communication from 'static/icons-images/generalqueries.png';
import Technical from 'static/icons-images/technicalqueries.png';

const ContactServices = () => (
  <section className="contact_services">
    <div className="container contactservices__container">
      <Row>
        <Col md={6}>
          <Row>
            <Col md={3}>
              <img src={Communication} className="contactservices__image" />
            </Col>
            <Col md={8}>
              <p className="contactservices__title text-uppercase font-weight-bold">
                General Communication
              </p>
              <p className="contactservices__support">
                For general queries, please email-
                <p className="contactservices__text font-weight-bold">info@6degreecash.com</p>
              </p>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Row>
            <Col md={3}>
              <img src={Technical} className="contactservices__image" />
            </Col>
            <Col md={9}>
              <p className="contactservices__title text-uppercase font-weight-bold">
                Technical Issues
              </p>
              <p className="contactservices__support">
                We are here to help! if you have technical issues
                <p className="contactservices__text font-weight-bold">Conatct Support</p>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </section>
);

export default ContactServices;

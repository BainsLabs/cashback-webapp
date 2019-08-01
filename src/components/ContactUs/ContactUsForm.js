import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Input from "components/common/inputField";

class ContactUsForm extends Component {
  state = {};

  render() {
    return (
      <div className="container contact_us">
        <h2 className="text-center font-weight-bold">Get In Touch</h2>
        <p className="text-center contactus__text">
          Have a Feedback or need some help ?
        </p>
        <div className="contactus__form">
          <Row className="contactus__general">
            <Col md={6}>
              <Input
                placeholder="Name"
                className="contactus__field"
                label="Name"
                labelClass="contactus__label"
              />
            </Col>
            <Col md={6}>
              <Input
                placeholder="Email"
                className="contactus__field"
                label="Email"
                labelClass="contactus__label"
              />
            </Col>
          </Row>
          <Row className="contactus__message">
            <Col>
              <Input
                as="textarea"
                rows="3"
                placeholder="Message"
                className="contactus__textarea"
                label="Message"
                labelClass="contactus__label"
              />
            </Col>
          </Row>
          <div className="text-center">
            <button className="contactus__button">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsForm;

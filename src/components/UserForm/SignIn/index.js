import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Input from "components/common/inputField";
import Select from "components/common/selectField";
import { ReferOptions } from "constants/referOptions";
import {
  faUser
} from "@fortawesome/fontawesome-free-solid";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class SignIn extends Component {
  render() {
    return (
      <section className="signup">
        <div className="container signup__container text-center">
          <h3>SignIn to 6Degree.CASH</h3>
        </div>
        <Row>
          <Col>
            <Input
              placeholder="Choose Username"
              className="signup__textfield"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              placeholder="Create Password"
              className="signup__textfield"
              type="password"
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Input id="isAccepted" type="checkbox" className="signup__check"/>
            &nbsp;
            <span>Stay Logged In</span>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <button className="text-uppercase signup__button">Login</button>
          </Col>
        </Row>
      </section>
    );
  }
}

export default SignIn;

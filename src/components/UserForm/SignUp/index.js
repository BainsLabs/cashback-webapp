import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Input from "components/common/inputField";
import Select from "components/common/selectField";
import { ReferOptions } from "constants/referOptions";

class SignUp extends Component {
  render() {
    return (
      <section className="signup">
        <div className="container signup__container">
          <h2>Create Account</h2>
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
            <Input placeholder="Enter Email" className="signup__textfield" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              placeholder="Create Password"
              className="signup__textfield"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Select
              label="How did you hear about us?"
              options={ReferOptions}
              className="signup__select"
              labelClass="signup__selectlabel"
              optionClass="signup__option"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input id="isAccepted" type="checkbox" />
            &nbsp;
            <span>I agree to terms & conditions and privacy policy.</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <button>Sign Up</button>
          </Col>
        </Row>
      </section>
    );
  }
}

export default SignUp;

import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Input from "components/common/inputField";

class CalculatorForm extends Component {
  state = {
    value1: "",
    value2: "",
    value3: "",
    value4: ""
  };

  render() {
    return (
      <Container>
        <h2 className="text-center">Earning Calculator</h2>
        <Row>
          <Col md={6} className="calculator__result">
            <Input type="text" className="calculator__rfield" />
          </Col>
          <Col md={6} className="calculator__result">
            <Input type="text" className="calculator__rfield" />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Input type="text" className="calculator__field" />
          </Col>
          <Col md={3}>
            <Input type="text" className="calculator__field" />
          </Col>
          <Col md={3}>
            <Input type="text" className="calculator__field" />
          </Col>
          <Col md={3}>
            <Input type="text" className="calculator__field" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CalculatorForm;

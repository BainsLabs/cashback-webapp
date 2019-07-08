import React from "react";
import { Row, Col } from "react-bootstrap";
import Input from "components/common/inputField";

const ReferUsernameSection = () => (
  <div className="refer__username">
    <Row>
      <Col className="text-center">
        <h1 className="text-uppercase font-weight-bold">3:</h1>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <h5 className="font-weight-bold">Send your Username</h5>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <Input value="xyz.123.cash" className="refer__field" readonly />
      </Col>
    </Row>
  </div>
);
export default ReferUsernameSection;

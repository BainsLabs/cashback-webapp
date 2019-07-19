import React from 'react';
import {
  Row, Col, InputGroup, FormControl, Button,
} from 'react-bootstrap';

export default () => (
  <section className="container subscribe">
    <Row>
      <Col>
        <p>Discover even more deals with Cash Back</p>
        <h3>SUBSCRIBE NOW</h3>
      </Col>
      <Col>
        <InputGroup className="mb-3 subscribe__input">
          <FormControl
            placeholder="Enter Your Email"
            aria-label="Enter Your Email"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Subscibe</Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  </section>
);

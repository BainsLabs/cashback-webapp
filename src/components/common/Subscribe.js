import React from 'react';
import {
  Row, Col, InputGroup, FormControl, Button,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const enterYourEmail = <FormattedMessage id="data.HPenteryouremail" />;
export default () => (
  <section className="container subscribe">
    <Row>
      <Col>
        <p>
          <FormattedMessage id="data.HPdealscashback" />
        </p>
        <h3>
          <FormattedMessage id="data.HPsubscribe" />
        </h3>
      </Col>
      <Col>
        <InputGroup className="mb-3 subscribe__input">
          <FormControl
            placeholder="Enter your Email"
            aria-label="Enter your Email"
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

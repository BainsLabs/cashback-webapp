import React from 'react';
import {
  Row, Col, InputGroup, FormControl, Button,
} from 'react-bootstrap';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

const Subscribe = (props) => {
  const { intl } = props;
  // const enterYourEmail =
  return (
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
              placeholder={intl.formatMessage({ id: 'data.HPenteryouremail' })}
              aria-label="Enter your Email"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                <FormattedMessage id="data.subscribe" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </section>
  );
};

Subscribe.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Subscribe);

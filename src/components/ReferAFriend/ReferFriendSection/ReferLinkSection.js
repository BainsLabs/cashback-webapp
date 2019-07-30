import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { FormattedMessage } from 'react-intl';

export default () => (
  <div className="refer__link">
    <Row>
      <Col className="text-center">
        <h3 className="text-uppercase font-weight-bold ">
          <FormattedMessage id="data.headerrf" />
        </h3>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <h1 className="text-uppercase font-weight-bold">1:</h1>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <h5 className="font-weight-bold">
          <FormattedMessage id="data.copyrfsharereferral" />
        </h5>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <Input value="xyz.123.cash" className="refer__field" readonly />
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <h6 className="muted mt-3 text-center refer__text">
          <FormattedMessage id="data.toreceivebonus" />
        </h6>
      </Col>
    </Row>
  </div>
);

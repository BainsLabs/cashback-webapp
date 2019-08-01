import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { modalState } from 'redux/actions/modalActions';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const SignInContent = (props) => {
  // eslint-disable-next-line no-shadow
  const { label, modalState } = props;
  return (
    <div className="auth-left__signup">
      <Row>
        <Col>
          <h2>
            <FormattedMessage id="data.headerlp" />
          </h2>
          <p>
            <FormattedMessage id="data.loginText" />
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <button type="button" onClick={() => modalState('signup')}>
            {label}
          </button>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = {
  modalState,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignInContent);

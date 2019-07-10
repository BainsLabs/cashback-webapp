import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SignUpModal } from 'redux/actions/modalActions';
import { connect } from 'react-redux';

const SignInContent = (props) => {
  // eslint-disable-next-line no-shadow
  const { label, SignUpModal } = props;
  return (
    <div className="auth-left__signup">
      <Row>
        <Col>
          <h2>Hello Friend!</h2>
          <p>Enter your personal details and start journey with us</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <button type="button" onClick={e => SignUpModal(e)}>
            {label}
          </button>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = {
  SignUpModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignInContent);

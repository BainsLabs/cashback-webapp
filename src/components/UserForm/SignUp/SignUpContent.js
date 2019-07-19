import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { modalState } from 'redux/actions/modalActions';
import { connect } from 'react-redux';

const SignUpContent = (props) => {
  // eslint-disable-next-line no-shadow
  const { label, modalState } = props;
  return (
    <div className="auth-left__signin">
      <Row>
        <Col>
          <h2>welcome back!</h2>
          <p>to keep connected with us please login with your personal info</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <button
            type="button"
            className="signup__Sbutton text-uppercase"
            onClick={() => modalState('signin')}
          >
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
)(SignUpContent);

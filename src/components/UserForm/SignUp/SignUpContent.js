import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SignInModal } from 'redux/actions/modalActions';
import { connect } from 'react-redux';

const SignUpContent = (props) => {
  // eslint-disable-next-line no-shadow
  const { label, SignInModal } = props;
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
            onClick={e => SignInModal(e)}
          >
            {label}
          </button>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = {
  SignInModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignUpContent);

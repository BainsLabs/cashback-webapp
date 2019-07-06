import React, {Component} from "react";
import { Row, Col } from "react-bootstrap";
import {
  SignUpModal
} from "redux/actions/modalActions";
import {connect} from "react-redux"

class SignInContent extends Component{
  render(){
    const {label, SignUpModal} = this.props
    return (
      <>
        <Row>
          <Col>
            <h1 className="text-capitalize text-center font-weight-bold signin__heading">Hello, Friend!</h1>
            <p className="text-capitalize text-center signup__text">enter your person details and start journey with us</p>
          </Col>
        </Row>
         <Row>
              <Col className="text-center">
                <button className="signin__Sbutton text-uppercase" onClick={(e) => SignUpModal(e)}>{label}</button>
              </Col>
            </Row>
      </>
    )
  }
}

const mapDispatchToProps = {
  SignUpModal
}

export default connect(null, mapDispatchToProps)(SignInContent)
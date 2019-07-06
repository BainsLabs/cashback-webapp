import React, {Component} from "react";
import { Row, Col } from "react-bootstrap";
import {
  SignInModal
} from "redux/actions/modalActions";
import {connect} from "react-redux"

class SignUpContent extends Component{
  render(){
    const {label, SignInModal} = this.props
    return (
      <>
        <Row>
          <Col>
            <h1 className="text-capitalize text-center font-weight-bold signup__heading">welcome back!</h1>
            <p className="text-capitalize text-center signup__text">to keep connected with us please login with your personal info</p>
          </Col>
        </Row>
         <Row>
              <Col className="text-center">
                <button className="signup__Sbutton text-uppercase" onClick={(e) => SignInModal(e)}>{label}</button>
              </Col>
            </Row>
      </>
    )
  }
}

const mapDispatchToProps = {
  SignInModal
}

export default connect(null, mapDispatchToProps)(SignUpContent)
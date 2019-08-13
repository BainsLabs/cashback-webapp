import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import InputField from "components/common/inputField";
import { injectIntl, intlShape } from "react-intl";

class Profile extends Component {
  render() {
    const {intl} = this.props
    let userprofile = this.props.user.userDetail.Items[0];
    console.log(userprofile, "proifle");
    return (
      <Container className="profile__container">
        <h3>Profile</h3>
        <Container className="form__container">
          <h6>
            Note: If you want to change your feedback settings, contact
            the&nbsp;
            <span className="customer">Customer Support Team</span>
          </h6>
          <Row>
            <Col>
              <InputField
                label="Country of residence"
                value={userprofile.country}
              />
            </Col>
            <Col>
              <InputField label="Currency" value="USD" />
            </Col>
            <Col>
              <InputField label="Email" value={userprofile.email} />
            </Col>
          </Row>
        </Container>
        <Container className="form__container">
          <Row>
            <Col>
              <InputField label="First name" value={userprofile.first_name} />
            </Col>
            <Col>
              <InputField label="Last name" value={userprofile.last_name} />
            </Col>
            <Col>
              <InputField label="Display Name" value={userprofile.username} />
            </Col>
          </Row>
        </Container>
        <Container className="form__container">
          <Row>
            <Col>
              <InputField label="Language" value="English" />
            </Col>
            <Col>
              <InputField
                label="Mobile Phone"
                value={userprofile.phoneNumber}
              />
            </Col>
            <Col>
              <InputField label="BirthDay" type="date" />
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <button className="savechanges">Save Changes</button>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

Profile.propTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = state => ({
  user: state.User
});

export default connect(mapStateToProps)(Profile);

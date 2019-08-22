import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputField from 'components/common/inputField';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

class Profile extends Component {
  render() {
    const { intl } = this.props;
    const userprofile = this.props.user.userDetail.Items[0];
    console.log(userprofile, 'proifle');
    return (
      <Container className="profile__container">
        <h3>
          <FormattedMessage id="data.profile" />
        </h3>
        <Container className="form__container">
          <h6>
            <FormattedMessage id="data.note" />
            &nbsp;
            <span className="customer">
              <Link to="/contact">
                <FormattedMessage id="data.contact" />
              </Link>
            </span>
          </h6>
          <Row>
            <Col md={4} xs={12}>
              <InputField
                label={intl.formatMessage({ id: 'data.countryofresidence' })}
                value={userprofile.country}
                placeholder="country"
              />
            </Col>
            <Col md={4} xs={12}>
              <InputField
                label={intl.formatMessage({ id: 'data.headermyearningsvipbusername' })}
                value={userprofile.username}
                placeholder="username"
              />
            </Col>
            <Col>
              <InputField
                label={intl.formatMessage({ id: 'data.labelemail' })}
                value={userprofile.email}
                placeholder="Email"
              />
            </Col>
          </Row>
        </Container>
        <Container className="form__container">
          <Row>
            <Col md={4} xs={12}>
              <InputField
                label={intl.formatMessage({ id: 'data.firstname' })}
                value={userprofile.first_name}
                placeholder="First Name"
              />
            </Col>
            <Col md={4} xs={12}>
              <InputField
                label={intl.formatMessage({ id: 'data.lastname' })}
                value={userprofile.last_name}
                placeholder="Last Name"
              />
            </Col>
            <Col md={4} xs={12}>
              <InputField
                label={intl.formatMessage({ id: 'data.displayname' })}
                value="-"
                placeholder="Display name"
              />
            </Col>
          </Row>
        </Container>
        <Container className="form__container">
          <Row>
            <Col md={4} xs={12}>
              <InputField
                label={intl.formatMessage({ id: 'data.defaultlanguage' })}
                value="English"
              />
            </Col>
            <Col md={4} xs={12}>
              <InputField
                label={intl.formatMessage({ id: 'data.mnumber' })}
                value={userprofile.phoneNumber}
                placeholder="9988998898"
              />
            </Col>
            <Col md={4} xs={12}>
              <InputField label={intl.formatMessage({ id: 'data.bday' })} type="date" />
            </Col>
          </Row>
          <Row>
            <Col className="text-right" xs={12}>
              <button className="savechanges">
                <FormattedMessage id="data.savechanges" />
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

Profile.propTypes = {
  intl: intlShape.isRequired,
};

const mapStateToProps = state => ({
  user: state.User,
});

export default injectIntl(connect(mapStateToProps)(Profile));

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Input from 'components/common/inputField';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { ContactAction } from 'redux/actions/signupActions';
import { Snackbar } from '@material/react-snackbar';
import LoaderButton from 'components/common/LoaderButton';

class ContactUsForm extends Component {
  state = {
    username: '',
    email: '',
    message: '',
    snackbarState: false,
    isLoading: false,
  };

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onHandleSubmit = async (e) => {
    const { ContactAction } = this.props;
    const { username, email, message } = this.state;
    const params = {
      name: username,
      email,
      message,
    };
    this.setState({
      isLoading: true,
    });
    await ContactAction(params);
    this.setState({
      snackbarState: true,
      isLoading: false,
      username: '',
      email: '',
      message: '',
    });
  };

  render() {
    const { intl } = this.props;
    const {
      snackbarState, isLoading, username, email, message,
    } = this.state;
    return (
      <div className="container contact_us">
        <div className="contactus__form">
          <Row className="contactus__general">
            <Col md={6}>
              <Input
                name="username"
                placeholder={intl.formatMessage({ id: 'data.headermyearningsname' })}
                className="contactus__field"
                label={intl.formatMessage({ id: 'data.headermyearningsname' })}
                labelClass="contactus__label"
                onChange={this.onHandleChange}
                value={username}
              />
            </Col>
            <Col md={6}>
              <Input
                name="email"
                placeholder={intl.formatMessage({ id: 'data.labelemail' })}
                className="contactus__field"
                label={intl.formatMessage({ id: 'data.labelemail' })}
                labelClass="contactus__label"
                onChange={this.onHandleChange}
                value={email}
              />
            </Col>
          </Row>
          <Row className="contactus__message">
            <Col>
              <Input
                name="message"
                as="textarea"
                rows="3"
                placeholder={intl.formatMessage({ id: 'data.formcumessage' })}
                className="contactus__textarea"
                label={intl.formatMessage({ id: 'data.formcumessage' })}
                labelClass="contactus__label"
                onChange={this.onHandleChange}
                value={message}
              />
            </Col>
          </Row>
          <div className="text-center">
            <LoaderButton
              block
              isLoading={isLoading}
              className="auth-right__forgot-btn"
              text="Submit"
              loadingText="Sending Mail..."
              onClick={this.onHandleSubmit}
            />
          </div>
        </div>
        <Snackbar message={<FormattedMessage id="data.mailsent" />} open={snackbarState} />
      </div>
    );
  }
}

ContactUsForm.propTypes = {
  intl: intlShape.isRequired,
};

const mapDispatchToProps = {
  ContactAction,
};

export default injectIntl(
  connect(
    null,
    mapDispatchToProps,
  )(ContactUsForm),
);

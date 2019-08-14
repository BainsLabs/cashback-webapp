import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

class ContactUsForm extends Component {
  state = {};

  render() {
    const { intl } = this.props;
    return (
      <div className="container contact_us">
        <h2 className="text-center font-weight-bold">
          <FormattedMessage id="data.getintouch" />
        </h2>
        <p className="text-center contactus__text">
          <FormattedMessage id="data.feedbacktext" />
        </p>
        <div className="contactus__form">
          <Row className="contactus__general">
            <Col md={6}>
              <Input
                placeholder={intl.formatMessage({ id: 'data.headermyearningsname' })}
                className="contactus__field"
                label={intl.formatMessage({ id: 'data.headermyearningsname' })}
                labelClass="contactus__label"
              />
            </Col>
            <Col md={6}>
              <Input
                placeholder={intl.formatMessage({ id: 'data.labelemail' })}
                className="contactus__field"
                label={intl.formatMessage({ id: 'data.labelemail' })}
                labelClass="contactus__label"
              />
            </Col>
          </Row>
          <Row className="contactus__message">
            <Col>
              <Input
                as="textarea"
                rows="3"
                placeholder={intl.formatMessage({ id: 'data.formcumessage' })}
                className="contactus__textarea"
                label={intl.formatMessage({ id: 'data.formcumessage' })}
                labelClass="contactus__label"
              />
            </Col>
          </Row>
          <div className="text-center">
            <button className="contactus__button">
              <FormattedMessage id="data.submit" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ContactUsForm.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ContactUsForm);

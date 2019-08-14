import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputField from 'components/common/inputField';
import ChangePassword from 'static/images/profile/change-password.png';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

const AccountSecurity = (props) => {
  const { intl } = props;
  return (
    <>
      <Container className="profile__container">
        <h3>
          <FormattedMessage id="data.accsecurity" />
        </h3>
        <Container className="form__container">
          <Row>
            <Col className="account__security">
              <span>
                <img src={ChangePassword} alt="changepassword" />
                &nbsp;
                {' '}
                <FormattedMessage id="data.changepass" />
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputField label={intl.formatMessage({ id: 'data.oldpassword' })} />
            </Col>
            <Col>
              <InputField label={intl.formatMessage({ id: 'data.newpass' })} />
            </Col>
            <Col>
              <InputField label={intl.formatMessage({ id: 'data.confirm' })} />
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <button className="savechanges">
                <FormattedMessage id="data.changep" />
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

AccountSecurity.propsType = {
  intl: intlShape.isRequired,
};

export default injectIntl(AccountSecurity);

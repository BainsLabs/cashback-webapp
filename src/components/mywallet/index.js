import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import Banner from 'components/common/Banner';
import BannerImage from 'static/images/cashback/wallet.png';

const MyWallet = (props) => {
  const { intl } = props;
  return (
    <>
      <Banner imgSrc={BannerImage} textPosition="center">
        <h2 className="vipbanner-text">
          <FormattedMessage id="data.mywallet" />
        </h2>
      </Banner>
      <Container>
        <Row>
          <Col md={6}>
            <Container className="profile__container">
              <h3 className="text-center">
                <FormattedMessage id="data.request" />
                &nbsp; TLC&nbsp;
                <FormattedMessage id="data.payout" />
              </h3>
              <Container className="membership__box">
                <Row>
                  <Col md={8} className="mywallet-form">
                    <Input
                      label={intl.formatMessage({
                        id: 'data.selectpaymentmethod',
                      })}
                      type="text"
                      placeholder={intl.formatMessage({ id: 'data.tlcwallet' })}
                      labelClass="wallet"
                    />
                    <Input
                      label={intl.formatMessage({ id: 'data.enteramount' })}
                      type="text"
                      placeholder={intl.formatMessage({ id: 'data.amount' })}
                      labelClass="wallet"
                    />
                    <button align="center" className="text-uppercase" style={{ fontSize: '.8rem' }}>
                      <FormattedMessage id="data.submitrequest" />
                    </button>
                  </Col>
                  <Col md={4}>
                    <div className="eclips text-center">
                      <p style={{ fontSize: '1.5rem' }}>0</p>
                      <p>
                        <FormattedMessage id="data.withdrawn" />
                      </p>
                    </div>
                    <div className="eclips text-center">
                      <p style={{ fontSize: '1.5rem' }}>0</p>
                      <p>
                        <FormattedMessage id="data.available" />
                      </p>
                    </div>
                    <div className="eclips text-center">
                      <p style={{ fontSize: '1.5rem' }}>5</p>
                      <p>
                        <FormattedMessage id="data.headermyearningspending" />
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
          <Col md={6}>
            <Container className="profile__container">
              <h3 className="text-center">
                <FormattedMessage id="data.request" />
                &nbsp; $&nbsp;
                <FormattedMessage id="data.payout" />
              </h3>
              <Container className="membership__box">
                <Row>
                  <Col md={4}>
                    <div className="eclips text-center">
                      <p style={{ fontSize: '1.5rem' }}>$0</p>
                      <p>
                        <FormattedMessage id="data.withdrawn" />
                      </p>
                    </div>
                    <div className="eclips text-center">
                      <p style={{ fontSize: '1.5rem' }}>$0</p>
                      <p>
                        <FormattedMessage id="data.available" />
                      </p>
                    </div>
                    <div className="eclips text-center">
                      <p style={{ fontSize: '1.5rem' }}>$5</p>
                      <p>
                        <FormattedMessage id="data.headermyearningspending" />
                      </p>
                    </div>
                  </Col>
                  <Col md={8} className="mywallet-form">
                    <Input
                      label={intl.formatMessage({
                        id: 'data.selectpaymentmethod',
                      })}
                      type="text"
                      placeholder={intl.formatMessage({
                        id: 'data.bitcoinpaypal',
                      })}
                      labelClass="wallet"
                    />
                    <Input
                      label={intl.formatMessage({ id: 'data.enteramount' })}
                      type="text"
                      placeholder={intl.formatMessage({ id: 'data.amount' })}
                      labelClass="wallet"
                    />
                    <button align="center" className="text-uppercase" style={{ fontSize: '.8rem' }}>
                      <FormattedMessage id="data.submitrequest" />
                    </button>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

MyWallet.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MyWallet);

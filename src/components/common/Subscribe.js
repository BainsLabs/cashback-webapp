import React, { useState } from 'react';
import {
  Row, Col, InputGroup, FormControl, Button,
} from 'react-bootstrap';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import JoinFree from 'static/images/home-page/joinfree-bg.jpg';
import Banner from 'components/common/Banner';
import { connect } from 'react-redux';
import { Snackbar } from '@material/react-snackbar';
import { withRouter } from 'react-router-dom';
import { modalState } from 'redux/actions/modalActions';

import joinNow from 'static/icons-images/Logo1_White_1000px.png';

const Subscribe = (props) => {
  const [snackbarState, setSnackbarState] = useState(false);
  const authenticated = localStorage.getItem('authenticated');
  const { intl } = props;
  const loginCheck = () => {
    if (authenticated) {
      setSnackbarState(true);
      return;
    }
    props.modalState('signup');
  };
  return (
    <div className="container subscribe">
      {/* <Row>
        <Col>
          <p>
            <FormattedMessage id="data.HPdealscashback" />
          </p>
          <h3>
            <FormattedMessage id="data.HPsubscribe" />
          </h3>
        </Col>
        <Col>
          <InputGroup className="mb-3 subscribe__input">
            <FormControl
              placeholder={intl.formatMessage({ id: 'data.HPenteryouremail' })}
              aria-label="Enter your Email"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                <FormattedMessage id="data.subscribe" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row> */}
      {/* <Banner imgSrc={JoinFree} textPosition="center"> */}
      <div className="join-now">
        <Row>
          <Col lg={8}>
            <Row>
              <Col lg={4} className="join-now__logo">
                <img src={joinNow} alt="joinNowLogo" height="150px" />
              </Col>
              <Col lg={8} className="join-now__text">
                <FormattedMessage id="data.HPBanner" />
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <button onClick={loginCheck} className="banner-btn banner-btn-mobile" type="button">
              <FormattedMessage id="data.referJoinNow" />
            </button>
          </Col>
        </Row>
      </div>
      {/* </Banner> */}
      <Snackbar message={<FormattedMessage id="data.alreadyLoggedIn" />} open={snackbarState} />
    </div>
  );
};

Subscribe.propTypes = {
  intl: intlShape.isRequired,
};

const mapDispatchToProps = {
  modalState,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(injectIntl(Subscribe)),
);

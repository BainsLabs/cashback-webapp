import React, { useState } from 'react';
import {
  Row, Col, InputGroup, FormControl, Button,
} from 'react-bootstrap';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import Banner from 'components/common/Banner';
import { connect } from 'react-redux';
import { Snackbar } from '@material/react-snackbar';
import { withRouter } from 'react-router-dom';
import { modalState } from 'redux/actions/modalActions';
import ReactTooltip from 'react-tooltip';
import { cloudfrontUrl } from 'utils/uitility';

const Subscribe = (props) => {
  const [snackbarState, setSnackbarState] = useState(false);
  const authenticated = localStorage.getItem('authenticated');
  const { intl } = props;
  const loginCheck = async () => {
    if (authenticated) {
      setSnackbarState(true);
      return;
    }

    props.modalState('signup');
  };
  return (
    <div className="container subscribe">
      <div className="join-now">
        <Row>
          <Col lg={8}>
            <Row>
              <Col lg={4} className="join-now__logo">
                <img
                  src={cloudfrontUrl('icons-images/Logo1_White_1000px.png')}
                  alt="joinNowLogo"
                  height="150px"
                />
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

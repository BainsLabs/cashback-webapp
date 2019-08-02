import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import GetTenReward from 'static/icons-images/getyour10.jpg';
import ReferFriendBonus from 'static/icons-images/refer-a-friend.jpg';

import GetTenRewardchi from 'static/icons-images/chineseImg2.jpg';
import ReferFriendBonuschi from 'static/icons-images/chineseImg1.jpg';
import { FormattedMessage } from 'react-intl';

const EarnExtraReward = () => {
  const language = localStorage.getItem('country');
  return (
    <section>
      <Container className="text-center">
        <Row>
          <Col className="affiliate__intro">
            <h1 className="font-weight-bold text-uppercase">
              <FormattedMessage id="data.headerhcearnextra" />
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <img
              src={language === 'en-US' ? ReferFriendBonus : ReferFriendBonuschi}
              alt="refer bonus"
              className="extrareward__img"
            />
          </Col>
          <Col md={6}>
            <img
              src={language === 'en-US' ? GetTenReward : GetTenRewardchi}
              alt="ten dollar reward"
              className="extrareward__img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EarnExtraReward;

import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Banner from 'components/common/Banner';
import bannerImg from 'static/images/my-earning/banner.jpg';
import { FormattedMessage } from 'react-intl';
import ComingSoon from 'static/images/my-earning/tab-coming-soon.png';
import ChineseComingSoon from 'static/images/my-earning/tab-coming-soon(chinese).jpg';
import Cashback from './cashBack';
import WelComeGift from './welcomeGift';
// import ReferBonus from './ReferralBonus';
// import VipCashBack from './VipCashback';
// import VipBonus from './vipBonus';
// import FriendShipBonus from './FriendShip/FriendshipBonus';

export default () => {
  const language = localStorage.getItem('country');
  return (
    <>
      <Banner imgSrc={bannerImg}>
        <h2 className="vipbanner-text text-center">
          <FormattedMessage id="data.myearnings" />
        </h2>
      </Banner>
      <Container className="myearnings-tabs">
        <Tabs defaultActiveKey="cash-back" id="uncontrolled-tab-example" className="tab">
          <Tab eventKey="cash-back" title={<FormattedMessage id="data.sortmenuSCCashBack" />}>
            <Cashback />
          </Tab>
          <Tab
            eventKey="profile"
            title={<FormattedMessage id="data.headermyearningswelcomegift" />}
            className="profile__tab"
          >
            <WelComeGift />
          </Tab>
          <Tab
            eventKey="contact"
            title={<FormattedMessage id="data.headermyearningsreferealbonus" />}
          >
            {/* <ReferBonus /> */}
            <img
              className="commingsoon"
              src={language === 'en-US' ? ComingSoon : ChineseComingSoon}
              alt="comming soon"
            />
          </Tab>
          <Tab
            eventKey="vipcashback"
            title={<FormattedMessage id="data.headermyearningsvipvipcashback" />}
          >
            {/* <VipCashBack /> */}
            <img
              className="commingsoon"
              src={language === 'en-US' ? ComingSoon : ChineseComingSoon}
              alt="comming soon"
            />
          </Tab>
          <Tab
            eventKey="vipbonus"
            title={<FormattedMessage id="data.headermyearningsvipbvipbonus" />}
          >
            {/* <VipBonus /> */}
            <img
              className="commingsoon"
              src={language === 'en-US' ? ComingSoon : ChineseComingSoon}
              alt="comming soon"
            />
          </Tab>
          <Tab
            eventKey="friendship"
            title={<FormattedMessage id="data.headermyearningsfriendshipbonus" />}
          >
            {/* <FriendShipBonus /> */}
            <img
              className="commingsoon"
              src={language === 'en-US' ? ComingSoon : ChineseComingSoon}
              alt="comming soon"
            />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Banner from 'components/common/Banner';
import bannerImg from 'static/images/my-earning/banner.jpg';
import Cashback from './cashBack';
import WelComeGift from './welcomeGift';
import ReferBonus from './ReferralBonus';
import VipCashBack from './VipCashback';
import VipBonus from './vipBonus';

export default () => (
  <>
    <Banner imgSrc={bannerImg} className="banner-padding">
      <h2 className="banner-heading">My Earnings</h2>
    </Banner>
    <Container className="myearnings-tabs">
      <Tabs defaultActiveKey="cash-back" id="uncontrolled-tab-example" className="tab">
        <Tab eventKey="cash-back" title="CASH BACK">
          <Cashback />
        </Tab>
        <Tab eventKey="profile" title="WELCOME GIFT" className="profile__tab">
          <WelComeGift />
        </Tab>
        <Tab eventKey="contact" title="REFERAL BONUS">
          <ReferBonus />
        </Tab>
        <Tab eventKey="vipcashback" title="VIP CASH BACK">
          <VipCashBack />
        </Tab>
        <Tab eventKey="vipbonus" title="VIP BONUS">
          <VipBonus />
        </Tab>
        <Tab eventKey="friendship" title="FRIENDSHIP BONUS">
          <button type="button" onClick={() => console.log('hello')}>
            Calculate Earning
          </button>
        </Tab>
      </Tabs>
    </Container>
  </>
);

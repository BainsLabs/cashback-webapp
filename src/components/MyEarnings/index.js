import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Banner from 'components/common/Banner';
import bannerImg from 'static/images/my-earning/banner.jpg';
import Cashback from './cashBack';

export default () => (
  <>
    <Banner imgSrc={bannerImg} className="banner-padding">
      <h2 className="banner-heading">My Earnings</h2>
    </Banner>
    <Container className="myearnings-tabs">
      <Tabs defaultActiveKey="cash-back" id="uncontrolled-tab-example">
        <Tab eventKey="cash-back" title="CASH BACK">
          <Cashback />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          world
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          asfnsak
        </Tab>
      </Tabs>
    </Container>
  </>
);

import React from 'react';
import Banner from 'components/common/Banner';
import { Container } from 'react-bootstrap';
import { cloudfrontUrl } from 'utils/uitility';
import HowAffiliateWorks from 'components/HowCashBackWork/HowAffiliateWorks';
import { FormattedMessage } from 'react-intl';

const HowCashbackWorks = () => (
  <>
    <Banner imgSrc={cloudfrontUrl('images/cashback/banner.jpg')} textPosition="center">
      <Container>
        <div className="cashback__banner">
          <h3>
            <FormattedMessage id="data.getpaid" />
          </h3>
        </div>
      </Container>
    </Banner>
    {/* <WhatIsCashback />
    <EarnExtraReward /> */}
    <HowAffiliateWorks />
  </>
);

export default HowCashbackWorks;

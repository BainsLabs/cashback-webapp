import React from 'react';
import Banner from 'components/common/Banner';
import { Container } from 'react-bootstrap';
import CashBackBanner from 'static/icons-images/hcwbanner.jpg';
import WhatIsCashback from 'components/HowCashBackWork/WhatIsCashback';
import EarnExtraReward from 'components/HowCashBackWork/ExtraRewards';
import HowAffiliateWorks from 'components/HowCashBackWork/HowAffiliateWorks';
import { FormattedMessage } from 'react-intl';

const HowCashbackWorks = () => (
  <>
    <Banner imgSrc={CashBackBanner} textPosition="center">
      <Container>
        <div className="cashback__banner">
          <h3>
            <FormattedMessage id="data.menuHPcashbackworks" />
          </h3>
        </div>
      </Container>
    </Banner>
    <WhatIsCashback />
    <EarnExtraReward />
    <HowAffiliateWorks />
  </>
);

export default HowCashbackWorks;

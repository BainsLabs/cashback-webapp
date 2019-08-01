import React from 'react';
import AffiliateSale from 'static/icons-images/step-1.png';
import AffiliateAd from 'static/icons-images/step2.png';
import AffiliateClicks from 'static/icons-images/step-3.png';
import AffiliateConvsersion from 'static/icons-images/step4.png';
import Browse from 'static/icons-images/Browse(blue).png';
import Shop from 'static/icons-images/shop(blue).png';
// import Earn from 'static/icons-images/earncashback(blue).png';
import { FormattedMessage } from 'react-intl';
// eslint-disable-next-line import/prefer-default-export

export const CashbackImg = [
  {
    path: AffiliateSale,
    alt: 'Sale',
    step: <FormattedMessage id="data.step1" />,
    description: <FormattedMessage id="data.affiliatesale" />,
  },
  {
    path: AffiliateAd,
    alt: 'Affiliate Ad',
    step: <FormattedMessage id="data.step2" />,
    description: <FormattedMessage id="data.affiliatewebsite" />,
  },
  {
    path: AffiliateClicks,
    alt: 'Affiliate Click',
    step: <FormattedMessage id="data.step3" />,
    description: <FormattedMessage id="data.affiliatecustome" />,
  },
  {
    path: AffiliateConvsersion,
    alt: 'Affiliate Conversion',
    step: <FormattedMessage id="data.step4" />,
    description: <FormattedMessage id="data.affiliatetrack" />,
  },
];

export const firstSection = [
  {
    path: Browse,
    alt: <FormattedMessage id="data.boxhcbrowse" />,
    description: <FormattedMessage id="data.dummytext" />,
  },
  {
    path: Shop,
    alt: <FormattedMessage id="data.boxhcshop" />,
    description: <FormattedMessage id="data.dummytext" />,
  },
  {
    path: Earn,
    alt: <FormattedMessage id="data.boxhc" />,
    description: <FormattedMessage id="data.dummytext" />,
  },
];

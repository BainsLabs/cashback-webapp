import React from 'react';
import travel from 'static/images/home-page/Travel.png';
import electronics from 'static/images/home-page/Electronics.png';
import finance from 'static/images/home-page/Finance.png';
import hb from 'static/images/home-page/Health-Beauty.png';
import fashion from 'static/images/home-page/Fashion.png';
import lifeStyle from 'static/images/home-page/LIFESTYLE.png';
import marketplace from 'static/images/home-page/marketplace.png';
import services from 'static/images/home-page/services.png';
import tlcDeals from 'static/images/home-page/TLC-Deals.png';


import { FormattedMessage } from 'react-intl';
// eslint-disable-next-line import/prefer-default-export
export const categories = [
  {
    icon: travel,
    label: <FormattedMessage id="data.HPfinance" />,
  },
  {
    icon: electronics,
    label: <FormattedMessage id="data.HPelectronics" />,
  },
  {
    icon: finance,
    label: <FormattedMessage id="data.HPfinance" />,
  },
  {
    icon: hb,
    label: <FormattedMessage id="data.HPhealth" />,
  },
  {
    icon: fashion,
    label: <FormattedMessage id="data.HPfashion" />,
  },
  {
    icon: lifeStyle,
    label: <FormattedMessage id="data.footerLIFESTYLE" />

  },
  {
    icon: marketplace,
    label: <FormattedMessage id="data.footerMARKETPLACE" />,
  },
  {
    icon: services,
    label: <FormattedMessage id="data.footerSERVICES" />,
  },
  {
    icon: tlcDeals,
    label: <FormattedMessage id="data.footerTLC" />,
  },
];

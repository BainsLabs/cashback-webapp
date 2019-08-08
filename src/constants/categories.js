import React from 'react';
import travel from 'static/images/home-page/Travel.png';
import electronics from 'static/images/home-page/Electronics.png';
import finance from 'static/images/home-page/Finance.png';
import hb from 'static/images/home-page/Health-Beauty.png';
import fashion from 'static/images/home-page/Fashion.png';
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
    icon: fashion,
    label: <FormattedMessage id="data.footerLIFESTYLE" />,
  },
  {
    icon: fashion,
    label: <FormattedMessage id="data.footerMARKETPLACE" />,
  },
  {
    icon: fashion,
    label: <FormattedMessage id="data.footerSERVICES" />,
  },
  {
    icon: fashion,
    label: <FormattedMessage id="data.footerTLC" />,
  },
];

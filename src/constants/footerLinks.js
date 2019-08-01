/* eslint-disable import/prefer-default-export */
import React from 'react';
import { FormattedMessage } from 'react-intl';

export const links = [
  {
    heading: <FormattedMessage id="data.HPfooterpopularlinks" />,
    link: [
      {
        linkLabel: <FormattedMessage id="data.BannerSC" />,
        url: '/categories',
      },
      {
        linkLabel: <FormattedMessage id="data.menuHPcashbackworks" />,
        url: '/how-cashback-works',
      },
      {
        linkLabel: <FormattedMessage id="data.menuHPcapsrefer" />,
        url: '/refer-friend',
      },
      {
        linkLabel: 'VIP BENEFITS',
        url: '#',
      },
      {
        linkLabel: <FormattedMessage id="data.menuHPmyaccount" />,
        url: '#',
      },
      {
        linkLabel: <FormattedMessage id="data.headermyearningsterms" />,
        url: '/terms-conditions',
      },
    ],
  },
  {
    heading: <FormattedMessage id="data.HPcategories" />,
    link: [
      {
        linkLabel: "ALL",
        url: '#'
      },
      {
        linkLabel: <FormattedMessage id="data.HPtravel" />,
        url: '#',
      },
      {
        linkLabel: <FormattedMessage id="data.HPelectronics" />,
        url: '#',
      },
      {
        linkLabel: <FormattedMessage id="data.HPfashion" />,
        url: '#',
      },
      {
        linkLabel: <FormattedMessage id="data.HPhealth" />,
        url: '#',
      },
    ],
  },
  {
    heading: <p className="hidden-heading"><FormattedMessage id="data.HPbrands" /></p>,
    link: [
      {
        linkLabel: 'LIFESTYLE',
        url: '#',
      },
      {
        linkLabel: 'MARKETPLACE',
        url: '#',
      },
      {
        linkLabel: 'SERVICES',
        url: '#',
      },
      {
        linkLabel: "TLC DEALS",
        url: '#',
      },
      {
        linkLabel: "OTHERS",
        url: '#',
      },
    ],
  },
];

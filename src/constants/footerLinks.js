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
        linkLabel: <FormattedMessage id="data.footerVIPBENEFITS" />,
        url: '/vip-benefits',
      },
      // {
      //   linkLabel: <FormattedMessage id="data.menuHPmyaccount" />,
      //   url: '#',
      // },
      {
        linkLabel: <FormattedMessage id="data.headermyearningsterms" />,
        url: '/terms-conditions',
      },
    ],
  },
  {
    mainClassName: 'footer__Cat',
    className: 'footer__category',
    heading: <FormattedMessage id="data.HPcategories" />,
    link: [
      {
        linkLabel: <FormattedMessage id="data.HPtravel" />,
        url: '/categories',
      },
      {
        linkLabel: <FormattedMessage id="data.HPelectronics" />,
        url: '/categories',
      },
      {
        linkLabel: <FormattedMessage id="data.HPfashion" />,
        url: '/categories',
      },
      {
        linkLabel: <FormattedMessage id="data.HPhealth" />,
        url: '/categories',
      },
      {
        linkLabel: <FormattedMessage id="data.footerLIFESTYLE" />,
        url: '/categories',
      },
      {
        linkLabel: <FormattedMessage id="data.footerMARKETPLACE" />,
        url: '/categories',
      },
      {
        linkLabel: <FormattedMessage id="data.footerSERVICES" />,
        url: '/categories',
      },
      {
        linkLabel: <FormattedMessage id="data.footerTLC" />,
        url: '/categories',
      },
    ],
  },
];

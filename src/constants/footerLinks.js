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
        linkLabel: <FormattedMessage id="data.footerAll" />,
        url: '#',
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
    heading: (
      <p className="hidden-heading">
        <FormattedMessage id="data.HPbrands" />
      </p>
    ),
    link: [
      {
        linkLabel: <FormattedMessage id="data.footerLIFESTYLE" />,
        url: '#',
      },
      {
        linkLabel: <FormattedMessage id="data.footerMARKETPLACE" />,
        url: '#',
      },
      {
        linkLabel: <FormattedMessage id="data.footerSERVICES" />,
        url: '#',
      },
      {
        linkLabel: <FormattedMessage id="data.footerTLC" />,
        url: '#',
      },
      {
        linkLabel: <FormattedMessage id="data.footerOther" />,
        url: '#',
      },
    ],
  },
];

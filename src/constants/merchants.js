import Hotel from 'static/images/home-page/hotel-logo.png';
import Emirates from 'static/images/home-page/emirate-logo.png';
import Expedia from 'static/images/home-page/epedia-logo.png'
import Goto from 'static/images/home-page/goto-logo.png'
import React from 'react';
import { FormattedMessage } from 'react-intl';
// eslint-disable-next-line import/prefer-default-export
export const merchants = [
  {
    brandImg: Hotel,
    offer: '8.0%',
    offerType: <FormattedMessage id="data.sortmenuSCCashBack" />,
    tlc: '2 TLC',
  },
  {
    brandImg: Emirates,
    offer: '2.5%',
    offerType: <FormattedMessage id="data.sortmenuSCCashBack" />,
    tlc: '2 TLC',
  },
  {
    brandImg: Expedia,
    offer: '3.0%',
    offerType: <FormattedMessage id="data.sortmenuSCCashBack" />,
    tlc: '2 TLC',
  },
  {
    brandImg: Goto,
    offer: '5.0%',
    offerType: <FormattedMessage id="data.sortmenuSCCashBack" />,
    tlc: '2 TLC',
  },
];

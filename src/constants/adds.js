/* eslint-disable import/prefer-default-export */
import React from 'react';
import Alibaba from 'static/images/card/alibaba.jpg';
import AlibabaLOGO from 'static/images/card/alibaba-logo.png';
import emirates from 'static/images/card/emirates.jpg';
import emiratesLogo from 'static/images/card/emirate-logo.png';
import expedia from 'static/images/card/expedia.jpg';
import expediaLogo from 'static/images/card/epedia-logo.png';

import Goto from 'static/images/card/goto.jpg';
import GotoLogo from 'static/images/card/goto-logo.png';
import hotel from 'static/images/card/hotel.jpg';
import hotelLogo from 'static/images/card/hotel-logo.png';
import Parkpalaza from 'static/images/card/parkplaza.jpg';
import ParkpalazaLogo from 'static/images/card/park-plaza-logo.png';
import Refer from 'static/icons-images/refer.jpg';
import VIP from 'static/icons-images/vip.png';
import { FormattedMessage } from 'react-intl';

export const adds = [
  {
    cahsback: '2.4%',
    tlc: '1.23',
    bgImg: Alibaba,
    icon: AlibabaLOGO,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
    tlcText: 'TLC',
  },
  {
    cahsback: '0.4%',
    tlc: '2 ',
    bgImg: emirates,
    icon: emiratesLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
    tlcText: 'TLC',
  },
  {
    cahsback: '4%',
    tlc: '2 ',
    bgImg: expedia,
    icon: expediaLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
    tlcText: 'TLC',
  },
  {
    cahsback: '1.4%',
    tlc: '0.7 ',
    bgImg: Goto,
    icon: GotoLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
    tlcText: 'TLC',
  },
  {
    cahsback: '2.4%',
    tlc: '1.2 ',
    bgImg: hotel,
    icon: hotelLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
    tlcText: 'TLC',
  },
  {
    cahsback: '2.4%',
    tlc: '1.2 ',
    bgImg: Parkpalaza,
    icon: ParkpalazaLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
    tlcText: 'TLC',
  },
];

export const addsDemo = [
  {
    cahsback: '2.4%',
    tlc: '1.23 TLC',
    bgImg: Alibaba,
    icon: AlibabaLOGO,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cahsback: '0.4%',
    tlc: '2 TLC',
    bgImg: emirates,
    icon: emiratesLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cahsback: '4%',
    tlc: '2 TLC',
    bgImg: expedia,
    icon: expediaLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cahsback: '1.4%',
    tlc: '0.7 TLC',
    bgImg: Goto,
    icon: GotoLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cahsback: '2.4%',
    tlc: '1.2 TLC',
    bgImg: hotel,
    icon: hotelLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cahsback: '2.4%',
    tlc: '1.2 TLC',
    bgImg: Parkpalaza,
    icon: ParkpalazaLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },

  {
    cahsback: '2.4%',
    tlc: '1.23 TLC',
    bgImg: Alibaba,
    icon: AlibabaLOGO,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cahsback: '0.4%',
    tlc: '2 TLC',
    bgImg: emirates,
    icon: emiratesLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cahsback: '4%',
    tlc: '2 TLC',
    bgImg: expedia,
    icon: expediaLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cahsback: '1.4%',
    tlc: '0.7 TLC',
    bgImg: Goto,
    icon: GotoLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cahsback: '2.4%',
    tlc: '1.2 TLC',
    bgImg: hotel,
    icon: hotelLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
  },
  {
    cashbackText:'Up to',
    tlcText2:'Up to',
    cahsback: '$7',
    tlc: '7',
    bgImg: Parkpalaza,
    icon: ParkpalazaLogo,
    offerType: <FormattedMessage id="data.headermyearningsvipcashback" />,
    tlcText:'TLC'
  },

];

export const members = [
  {
    image: Refer,
    btnText: <FormattedMessage id="data.HPreferafriend" />,
    class: 'big-img',
    url: '/refer-friend'
  },
  {
    image: VIP,
    btnText: <FormattedMessage id="data.HPbecomevip" />,
    class: 'small-img',
    url: '/vip-benefits'
  },
];

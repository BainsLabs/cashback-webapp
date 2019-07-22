/* eslint-disable import/prefer-default-export */
import React from 'react';
import KFC from 'static/icons-images/kfc-bg.jpg';
import kfcLOGO from 'static/icons-images/kfc-logo.png';
import Armani from 'static/icons-images/armani-bg.jpg';
import armaniLogo from 'static/icons-images/armani.png';
import Amazon from 'static/icons-images/amazon-bg.jpg';
import amazonLogo from 'static/icons-images/amazon.png';
import Pharma from 'static/icons-images/pharma-bg.jpg';
import pharmaLogo from 'static/icons-images/pharma-logo.png';
import OYO from 'static/icons-images/oyo-bg.jpg';
import oyoLogo from 'static/icons-images/oyo.png';
import Refer from 'static/icons-images/refer.jpg';
import VIP from 'static/icons-images/vip.png';
import { FormattedMessage } from 'react-intl';

export const adds = [
  {
    cahsback: '48%',
    tlc: '1 TLC',
    bgImg: KFC,
    icon: kfcLOGO,
    offerType: 'OFF',
  },
  {
    cahsback: '48%',
    tlc: '1 TLC',
    bgImg: KFC,
    icon: kfcLOGO,
    offerType: 'OFF',
  },
  {
    cahsback: '3.5%',
    tlc: '2 TLC',
    bgImg: Armani,
    icon: armaniLogo,
    offerType: 'OFF',
  },
  {
    cahsback: '50%',
    tlc: '2 TLC',
    bgImg: Amazon,
    icon: amazonLogo,
    offerType: 'OFF',
  },
  {
    cahsback: '$ 60',
    tlc: '2 TLC',
    bgImg: Pharma,
    icon: pharmaLogo,
    offerType: 'CB',
  },
  {
    cahsback: '50%',
    tlc: '1 TLC',
    bgImg: OYO,
    icon: oyoLogo,
    offerType: 'OFF',
  },
];

export const members = [
  {
    image: Refer,
    btnText: <FormattedMessage id="data.HPreferafriend" />,
  },
  {
    image: VIP,
    btnText: <FormattedMessage id="data.HPbecomevip" />,
  },
];

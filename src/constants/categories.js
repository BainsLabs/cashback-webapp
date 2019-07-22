import React from 'react';
import travel from 'static/icons-images/Travel-icon.png';
import electronics from 'static/icons-images/Electronics.png';
import finance from 'static/icons-images/Finance.png';
import hb from 'static/icons-images/Health-beauty.png';
import fashion from 'static/icons-images/Fashion.png';
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
];

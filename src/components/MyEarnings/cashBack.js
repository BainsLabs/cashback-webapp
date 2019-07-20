import React from 'react';

export default () => (
  <ul>
    <li>FILTER</li>
    <li>
      Pending
      {' '}
      <input type="checkbox" />
    </li>
    <li>
      Declined
      {' '}
      <input type="checkbox" />
    </li>
    <li>
      Paid
      {' '}
      <input type="checkbox" />
    </li>
  </ul>
);

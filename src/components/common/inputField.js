import React from 'react';

export default props => {
  const { placeholder, className } = props;
  return <input className={className} placeholder={placeholder} {...props} />;
};

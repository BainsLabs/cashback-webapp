import React from 'react';

export default ({
  isLoading, text, loadingText, className = '', disabled = false, ...props
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`LoaderButton ${className}`} disabled={disabled || isLoading} {...props}>
      {isLoading && <div className="lds-dual-ring" />}
      {!isLoading ? text : loadingText}
    </button>
  );
};

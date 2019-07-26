import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/fontawesome-free-solid';
import loaderImag from 'static/icons-images/loader.gif';

export default ({
  isLoading, text, loadingText, className = '', disabled = false, ...props
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`LoaderButton ${className}`} disabled={disabled || isLoading} {...props}>
      {isLoading && <img src={loaderImag} alt="loading..." />}
      {!isLoading ? text : loadingText}
    </button>
  );
};

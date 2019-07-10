import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/fontawesome-free-solid';

export default ({
  isLoading, text, loadingText, className = '', disabled = false, ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`LoaderButton ${className}`} disabled={disabled || isLoading} {...props}>
    {isLoading && <FontAwesomeIcon icon={faSync} className="spinning" />}
    {!isLoading ? text : loadingText}
  </button>
);

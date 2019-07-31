import React from 'react';

export default (props) => {
  const {
    placeholder, className, label, labelClass, disabled, onChange,
  } = props;
  return (
    <>
      {label ? <span className={labelClass}>{label}</span> : ''}

      <input
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
    </>
  );
};

import React from 'react';

export default (props) => {
  const {
    placeholder, className, label, labelClass, disabled, onChange, type, name,
  } = props;
  return (
    <>
      {label ? <span className={labelClass}>{label}</span> : ''}

      <input
        className={className}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        disabled={disabled}
        {...props}
      />
    </>
  );
};

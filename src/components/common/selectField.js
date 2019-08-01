import React from 'react';

export default (props) => {
  const {
    className, label, labelClass, options, optionClass,
  } = props;
  const selectOptions = options.map(option => (
    <option
      key={option.key}
      value={option.item}
      selected={option.default ? option.default : ''}
      disabled={option.disable ? option.disable : ''}
      className={optionClass}
    >
      {option.item}
    </option>
  ));
  return (
    <>
      {label ? <span className={labelClass}>{label}</span> : ''}
      <select className={className} {...props}>
        {selectOptions}
      </select>
    </>
  );
};

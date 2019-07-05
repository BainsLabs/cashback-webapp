import React from "react";

export default props => {
  const { className, label, labelClass, options, optionClass } = props;
  const selectOptions = options.map(option => (
    <option
      key={option.label}
      value={option.value}
      selected={option.default ? option.default : ""}
      disabled={option.disable ? option.disable : ""}
      className={optionClass}
    >
      {option.label}
    </option>
  ));
  return (
    <>
      {label ? <span className={labelClass}>{label}</span> : ""}
      <select className={className} {...props}>
        {selectOptions}
      </select>
    </>
  );
};

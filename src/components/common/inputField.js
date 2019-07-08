import React from "react";

export default props => {
  const { placeholder, className, label, labelClass, icon } = props;
  return (
    <>
      {label ? <span className={labelClass}>{label}</span> : ""}

      <input className={className} placeholder={placeholder} {...props} />
    </>
  );
};

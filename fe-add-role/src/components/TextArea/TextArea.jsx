import React from "react";

const TextArea = ({
  type = "text",
  value,
  label,
  changeHandler,
  placeholder,
  className,
  labelClassName,
  name,
}) => {
  return (
    <label
      className={`py-1 flex  justify-start items-start flex-col text-xl font-semibold ${labelClassName}`}
    >
      {label}
      <textarea
        type={type}
        value={value}
        name={name}
        onChange={changeHandler}
        placeholder={placeholder}
        className={`text-lg font-normal rounded-md shadow-lg border ${className}`}
      />
    </label>
  );
};

export default TextArea;

import React from "react";

const Input = ({
  label,
  value,
  placeholder,
  habldeInput,
  type,
  name,
  id,
  required,
}) => {
  return (
    <div className="input-wrap">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="input"
        placeholder={placeholder}
        name={name}
        onChange={habldeInput}
        value={value}
      />
    </div>
  );
};

export default Input;

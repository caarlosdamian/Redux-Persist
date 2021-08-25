import React from "react";
import './input.css'
const Input = ({
  label,
  value,
  placeholder,
  habldeInput,
  type,
  name,
  id,
  required,
}) => (
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
    <span className="input-grow "></span>
  </div>
);

export default Input;

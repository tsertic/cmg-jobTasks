import React from 'react';
import './Input.css';
const Input = ({ value, name, action }) => {
  return (
    <input
      className="Input"
      type="number"
      value={value}
      name={name}
      onChange={action}
    />
  );
};

export default Input;

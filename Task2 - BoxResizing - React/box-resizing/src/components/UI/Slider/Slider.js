import React from 'react';
import './Slider.css';

const Slider = props => {
  const { min, max, value, action, name } = props;
  return (
    <input
      className="Slider"
      type="range"
      min={min}
      max={max}
      name={name}
      value={value}
      onChange={action}
    />
  );
};

export default Slider;

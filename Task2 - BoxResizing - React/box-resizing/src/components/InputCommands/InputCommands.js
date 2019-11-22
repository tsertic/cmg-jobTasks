import React from 'react';
import './InputCommands.css';
import Slider from '../UI/Slider/Slider';
import Input from '../UI/Input/Input';

const InputCommands = props => {
  const { width, height, minRange, maxRange, handleChange } = props;

  return (
    <div className="InputCommands">
      <div className="width-box">
        <p>Width: </p>
        <Slider
          min={minRange}
          max={maxRange}
          value={width}
          name="width"
          action={handleChange}
        />

        <Input value={width} name="width" action={handleChange} />
      </div>
      <div className="width-box">
        <p>Height: </p>
        <Slider
          min={minRange}
          max={maxRange}
          value={height}
          name="height"
          action={handleChange}
        />
        <Input value={height} name="height" action={handleChange} />
      </div>
    </div>
  );
};

export default InputCommands;

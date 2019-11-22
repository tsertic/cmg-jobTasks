import React from 'react';
import './Box.css';
const Box = ({ width, height, color }) => {
  return (
    <div
      className="Box"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${color}`
      }}
    ></div>
  );
};

export default Box;

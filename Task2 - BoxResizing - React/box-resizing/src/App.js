import React, { Component } from 'react';
import './App.css';
import InputCommands from './components/InputCommands/InputCommands';
import Box from './components/Box/Box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      height: 300,
      width: 300,
      color: 'green',
      minRange: 1,
      maxRange: 500
    };
  }

  handleChange = e => {
    const { minRange, maxRange } = this.state;
    let { name, value } = e.target;
    if (value < minRange) value = minRange;
    if (value > maxRange) value = maxRange;
    this.setState(() => {
      return { [name]: value };
    });
  };

  render() {
    const { height, width, color, minRange, maxRange } = this.state;
    return (
      <div className="App">
        <InputCommands
          handleChange={this.handleChange}
          height={height}
          width={width}
          minRange={minRange}
          maxRange={maxRange}
        />
        <div className="box-container">
          <Box width={width} height={height} color={color} />
        </div>
      </div>
    );
  }
}

export default App;

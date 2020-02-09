import React, { Fragment } from 'react';
import { generatePin } from 'generate-pin';
import './Generate.css';
import Pins from '../common/Pins';

class Generate extends React.Component {
  readonly state = { pins: generatePin(5) };

  private setNewCollection = (e: React.MouseEvent) => {
    this.setState({ pins: generatePin(5) });
  };

  render() {
    return (
      <Fragment>
        <Pins pins={this.state.pins}></Pins>
        <button onClick={this.setNewCollection}>GENERATE</button>
        <button
          onClick={() => {
            return false;
          }}
        >
          SAVE
        </button>
      </Fragment>
    );
  }
}

export default Generate;

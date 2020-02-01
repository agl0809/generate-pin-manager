import React from 'react';
import { generatePin } from 'generate-pin';
import './Generate.css';
import Pins from '../common/Pins';

class Generate extends React.Component {
  collection = generatePin(5);
  render() {
    return <Pins pins={this.collection}></Pins>;
  }
}

export default Generate;

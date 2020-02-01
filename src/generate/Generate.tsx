import React from 'react';
import { generatePin } from 'generate-pin';
import './Generate.css';

class Generate extends React.Component {
  pins = generatePin(5).map(pin => <li>{pin}</li>);
  render() {
    return <ul className="pin-collection">{this.pins}</ul>;
  }
}

export default Generate;

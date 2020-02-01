import React from 'react';
import './Pins.css';

const Pins = (props: any) => (
  <ul className="pins">
    {props.pins.map((pin: string) => (
      <li>{pin}</li>
    ))}
  </ul>
);

export default Pins;

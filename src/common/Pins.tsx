import React from 'react';
import './Pins.css';

const Pins = (props: any) => (
  <ul className="pins">
    {props.pins.map((pin: string) => (
      <li key={pin}>{pin}</li>
    ))}
  </ul>
);

export default Pins;

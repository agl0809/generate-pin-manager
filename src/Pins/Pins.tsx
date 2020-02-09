import React from 'react';
import './Pins.css';

const Pins = (props: { pins: string[] }) => (
  <ul className="pins">
    {props.pins.map((pin: string) => (
      <li key={pin}>{pin}</li>
    ))}
  </ul>
);

export default Pins;

import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <Link to="/">Generate</Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import React from 'react';
import { Link } from "react-router-dom";

function NavigatorBar() {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq">F.A.Q</Link>
          </li>
          <li className="nav-item">
            <Link to="/store">Store</Link>
          </li>
          <li className="nav-item">
            <Link to="/app">App</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigatorBar;
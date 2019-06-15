import React from 'react';
import logo from '../assets/images/logo-horizontal.svg';

export default function Header() {
  return (
    <header>

      <img src={logo} alt="Broworks-logo" className="logo" />

      <nav>
        <ul>
          <li>
            <h6>Works</h6>
          </li>

          <li>
            <h6>Agency</h6>
          </li>

          <li>
            <h6>Contact</h6>
          </li>

          <li>
            <h6>Blog</h6>
          </li>
        </ul>
      </nav>

      <button className="btn btn-blue">HIRE US</button>


    </header>
  );
}

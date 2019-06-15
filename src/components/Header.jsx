import React from 'react';
import logo from '../assets/images/logo-horizontal.svg';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>

      <Link to='/'>
        <img src={logo} alt="Broworks-logo" className="logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to='/works'>
              <h6>Works</h6>
            </Link>
          </li>

          <li>
            <Link to='/agency'>
              <h6>Agency</h6>
            </Link>
          </li>

          <li>
            <a href='#lets-work-together'>
              <h6>Contact</h6>
            </a>
          </li>

          <li>
            <Link to='/blog'>
              <h6>Blog</h6>
            </Link>
          </li>
        </ul>
      </nav>

      <button className="btn btn-blue">HIRE US</button>


    </header>
  );
}

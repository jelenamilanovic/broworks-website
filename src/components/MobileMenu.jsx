import React from 'react';
import { Link } from 'react-router-dom';
import SocialNetworks from './SocialNetworks.jsx';
import back from '../assets/icons/back.svg';

export default function MobileMenu(props) {
  return (
    <div id="mobile-menu">
      <div className="close">
        <h3>&#x2716;</h3>
      </div>

      <ul className="links">
        <li>
          <Link to="/works">
            <h3>Works</h3>
          </Link>
        </li>
        <li>
          <Link to="/works">
            <h3>Agency</h3>
          </Link>
        </li>
        <li>
          <Link to="/works">
            <h3>Contact</h3>
          </Link>
        </li>
        <li>
          <Link to="/works">
            <h3>Blog</h3>
          </Link>
        </li>
      </ul>

      <div className="mm-btn">
        <button className="btn btn-blue">Hire us</button>
      </div>


      <SocialNetworks />
    </div>
  )
}

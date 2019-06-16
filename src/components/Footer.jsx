import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/icons/Broworks white logo.svg';

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-main">

        <img src={logo} alt="Broworks" id="white-logo" />


        <div className="column">
          <ul>

            <Link to="/works">
              <li>Works</li>
            </Link>

            <Link to="/agency">
              <li>Agency</li>
            </Link>

            <Link to="/blog">
              <li>Blog</li>
            </Link>

            <a href="#lets-work-together">
              <li>Contact</li>
            </a>

            <Link to="/">
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>

        <div className="column contact">
          <div className="upper">
            <p>Broworks</p>
            <p>Pancevo, Serbia</p>
          </div>

          <div className="bottom">
            <p>T: +381 603539213</p>
            <p>M: office@broworks.net</p>
          </div>
        </div>

        <div className="column">
          <ul>
            <a href="https://www.behance.net/BroworksStudio" target="_blank">
              <li>Behance</li>
            </a>

            <a href="https://www.facebook.com/broworksdesign/" target="_blank">
              <li>Facebook</li>
            </a>

            <a href="https://www.instagram.com/broworksdesign/" target="_blank">
              <li>Instagram</li>
            </a>

            <a href="https://www.linkedin.com/company/broworks/" target="_blank">
              <li>Linkedin</li>
            </a>

            <a href="https://twitter.com/Broworks1" target="_blank">
              <li>Twitter</li>
            </a>

            <a href="https://medium.com/@office_86095" target="_blank">
              <li>Medium</li>
            </a>
          </ul>
        </div>
      </div>
      <p className="copyright">© 2019 Broworks. All rights reserved.</p>
    </div>
  );
}

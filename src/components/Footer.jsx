import React from 'react';
import logo from '../assets/images/broworks ikonica.svg';

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-main">
        <div className="column">
          <img src={logo} alt="Broworks" />
        </div>

        <div className="column">
          <ul>
            <li>Works</li>
            <li>Agency</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Testimonials</li>
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
            <li>Behance</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Medium</li>
          </ul>
        </div>
      </div>
      <p className="copyright">© 2019 Broworks. All rights reserved.</p>
    </div>
  );
}

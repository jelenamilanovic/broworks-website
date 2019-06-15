import React from 'react'
import Header from './Header.jsx';

import twitter from '../assets/icons/twitter.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import behance from '../assets/icons/behance.svg';

export default function Intro() {
  return (
    <div className="intro">
      <Header />

      <div className="title">
        <h1 className="extra-bold">We create <br /> unique projects <br /> that stand out</h1>
        <p>Our motivation is to help our clients grow and be the best in their branch by creating professional brand identity,
user-centered websites & apps, and digital marketing with the researched market and target audience.</p>

        <div className="btns">
          <button className="btn btn-blue">Our work</button>
          <button className="btn btn-transparent">Free consultancy &#8594;</button>
        </div>

      </div>



      <ul className="social-networks">
        <li>
          <img src={twitter} alt="Twitter" />
        </li>
        <li>
          <img src={behance} alt="Behance Network" />
        </li>
        <li>
          <img src={instagram} alt="Instagram" />
        </li>
        <li>
          <img src={facebook} alt="Facebook" />
        </li>
      </ul>
    </div>
  );
}
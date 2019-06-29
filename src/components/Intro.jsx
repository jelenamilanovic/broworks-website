import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../assets/icons/twitter.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import behance from '../assets/icons/behance.svg';
import withRedirection from './withRedirection.jsx';

function Intro({ redirect }) {

  return (
    <div className="intro">

      <div className="title wow fadeIn">
        <h1 className="extra-bold">We create <br /> unique projects <br /> that stand out</h1>
        <p>Our motivation is to help our clients grow and be the best in their branch by creating professional brand identity,
          user-centered websites & apps, and digital marketing with the researched market and target audience.</p>

        <div className="btns">
          <Link to="/works">
            <button className="btn btn-blue">Our work</button>
          </Link>

          <a href="#" onClick={redirect}>
            <button className="btn btn-transparent">Free consultancy &#8594;</button>
          </a>
        </div>
      </div>

      <ul className="social-networks">
        <li>
          <a href="https://twitter.com/Broworks1" target="_blank">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>

        <li>
          <a href="https://www.behance.net/BroworksStudio" target="_blank">
            <img src={behance} alt="Behance Network" />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/broworksdesign/" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>

        <li>
          <a href="https://www.facebook.com/broworksdesign/" target="_blank">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default withRedirection(Intro, 'lets-work-together');
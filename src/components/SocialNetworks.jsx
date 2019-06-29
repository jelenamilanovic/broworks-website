import React, { Component } from 'react';
import twitter from '../assets/icons/twitter.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import behance from '../assets/icons/behance.svg';

export default function SocialNetworks(props) {
  return (
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
  )
}

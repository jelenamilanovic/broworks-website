import React from 'react'
import devices from '../assets/images/devices.png';

export default function WhatWeDo(props) {
  return (
    <div id="what-we-do">
      <div className="left">
        <img src={devices} alt="What we do" />
      </div>

      <div className="right">
        <h1>What we do</h1>

        <ul className="list">
          <li className="yellow">
            <h3>Design & Development</h3>
          </li>

          <li>
            <h3>Logo & Branding</h3>
          </li>
          <li>
            <h3>Digital Marketing</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}
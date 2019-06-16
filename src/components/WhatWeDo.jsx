import React, { useState } from 'react'
import devices from '../assets/images/devices.png';

export default function WhatWeDo(props) {
  let spheres = ['Design & Development', 'Logo & Branding', 'Digital Marketing'];
  let [activeSphere, setActiveSphere] = useState(0);

  return (
    <div id="what-we-do">
      <div className="left">
        <img src={devices} alt="What we do" />
      </div>

      <div className="right">
        <h1>What we do</h1>

        <ul className="list">
          {spheres.map((sphere, i) => {
            let sphereClass = i === activeSphere ? 'yellow' : '';

            return (
              <li key={i} className={sphereClass}>
                <h3 onMouseOver={() => setActiveSphere(i)}>{sphere}</h3>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
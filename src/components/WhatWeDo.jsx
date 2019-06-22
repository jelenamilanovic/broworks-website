import React, { useState } from 'react'
import devices from '../assets/images/devices.png';
import services2 from '../assets/images/services2.png';
import about from '../assets/images/about.png';

export default function WhatWeDo(props) {
  let spheres = [{ title: 'Design & Development', photo: devices }, { title: 'Logo & Branding', photo: services2 }, { title: 'Digital Marketing', photo: about }];
  let [activeSphere, setActiveSphere] = useState(0);
  let [activePhoto, setActivePhoto] = useState(0);

  return (
    <div id="what-we-do">
      <div className="mobile-hidden">
        <div className="left">
          <img src={spheres[activePhoto].photo} alt="What we do" />
        </div>

        <div className="right">
          <h1>What we do</h1>

          <ul className="list">
            {spheres.map((sphere, i) => {
              let sphereClass = i === activeSphere ? 'yellow' : '';

              return (
                <li key={i} className={sphereClass}>
                  <h3 onClick={() => setActivePhoto(i)} onMouseOver={() => setActiveSphere(i)}>{sphere.title}</h3>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="mobile-visible">
        <h1>What we do</h1>
        <h3>Digital Marketing</h3>
        <img src={spheres[activePhoto].photo} alt="What we do" />
      </div>

    </div>
  )
}
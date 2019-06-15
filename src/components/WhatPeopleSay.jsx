import React from 'react';
import quote from '../assets/images/quote.png';

export default function WhatPeopleSay(props) {
  return (
    <div id="what-people-say">
      <h1 className="title extrabold">What people say</h1>

      <div className="box">
        <img src={quote} />
        <div className="text">
          <p>
            “I hired Broworks team to help me out with logo and brand identity for my hairstyling company. They did a great job in design, as well as a good coaching for my social media
  campaign.”
          </p>

          <p className="who"> Dimitrije Grujić </p>
          <p className="from"> Dimitrije Salon </p>
        </div>
      </div>

      <div className="arrows">
        <div className="arrow"><span>&#8592;</span></div>
        <div className="arrow"><span>&#8594;</span></div>
      </div>
    </div>
  );
}

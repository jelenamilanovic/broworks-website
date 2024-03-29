import React from 'react';
import { Link } from 'react-router-dom';
import standout from '../assets/images/stdout.png';

export default function StandOut() {
  return (
    <div id="standout" className="wow zoomIn">
      <img src={standout} alt="Stand out" />

      <div className="text">
        <h1 className="extrabold">Stand out from <br /> the crowd</h1>

        <p>In today's business, it's very hard to make your voice heard in the crowd within many others. We create everything from scratch,
according to the needs of the project. Making sure that our service has its purpose and did what it supposed to do.</p>

        <Link to="/agency">
          <button className="btn btn-yellow">Learn more</button>
        </Link>
      </div>

    </div>
  )
}
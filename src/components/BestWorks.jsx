import React from 'react';
import { Link } from 'react-router-dom';

import concept from '../assets/images/concept.png';
import sana from '../assets/images/sana.png';
import pomoc from '../assets/images/pomoc.png';
import dimitrije from '../assets/images/dimitrije.png';

export default function BestWork(props) {
  return (
    <div id="best-works">
      <h1 className="extrabold">Our best work</h1>

      <Link to="works/dimitrije-salon">
        <li className="work">
          <h3>Dimitrije Salon</h3>
          <img src={dimitrije} alt="Dimitrije Salon" />
          <div className="w-card">
            <span>Brand Identity</span>
          </div>
        </li>
      </Link>

      <Link to="works/pomoc-srpskoj-deci">
        <li className="work">
          <h3>Pomoc Srpskoj Deci</h3>
          <img src={pomoc} alt="Pomoc Srpskoj Deci" />
          <div className="w-card">
            <span>Brand Identity</span>
          </div>
        </li>
      </Link>

      <ul className="works">
        <Link to="works/sana">
          <li className="work">
            <h3>Sana</h3>
            <img src={sana} alt="Sana" />
            <div className="w-card">
              <span>Brand Identity</span>
            </div>
          </li>
        </Link>

        <Link to="works/concept-studio">
          <li className="work fullopacity">
            <h3>Concept Studio</h3>
            <img src={concept} alt="Concept Studio" />
            <div className="w-card">
              <span>Logo & Website Design</span>
            </div>
          </li>
        </Link>

      </ul>

    </div>
  )
}

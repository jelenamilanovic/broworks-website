import React from 'react';
import concept from '../assets/images/concept.png';
import sana from '../assets/images/sana.png';
import pomoc from '../assets/images/pomoc.png';
import dimitrije from '../assets/images/dimitrije.png';

export default function BestWork(props) {
  return (
    <div id="best-works">
      <h1 className="extrabold">Our best work</h1>

      <ul className="works">
        <li className="work">
          <h3>Concept Studio</h3>
          <img src={concept} alt="Concept Studio" />
        </li>

        <li className="work">
          <h3>Sana</h3>
          <img src={sana} alt="Sana" />
        </li>

        <li className="work">
          <h3>Pomoc Srpskoj Deci</h3>
          <img src={pomoc} alt="Pomoc Srpskoj Deci" />
        </li>

        <li className="work">
          <h3>Dimitrije Salon</h3>
          <img src={dimitrije} alt="Dimitrije Salon" />
        </li>
      </ul>

    </div>
  )
}

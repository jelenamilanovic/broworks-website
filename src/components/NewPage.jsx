import React from 'react';
import { Link } from 'react-router-dom';
//import sanaPreview from '../assets/images/Sana/Sana Preview img.png';

export default function NextPage({ nextPage }) {

  return (
    <div id="next-page">
      <section>
        <h1 className="np-title">Next Project</h1>
        <h3 className="np-subtitle">{nextPage.name}</h3>
        <p>{nextPage.work}</p>
        <Link to={nextPage.link}>
          <button className="btn btn-yellow">See Project</button>
        </Link>
      </section>

      <section>
        <img src={nextPage.preview} alt={nextPage.name} />
      </section>
    </div>
  )
}
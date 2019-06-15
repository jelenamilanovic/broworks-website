import React from 'react'
import agency from '../assets/images/agency.png';
import efficiency from '../assets/images/efficiency.png';
import determination from '../assets/images/determination.png';
import evaluation from '../assets/images/evaluation.png';

export default function Agency(props) {
  return (
    <div id="agency">
      <h1 className="title extrabold">We are efficient and <br /> determined.</h1>

      <img src={agency} alt="Agency" />

      <div className="content">
        <p className="introline">
          Broworks is a design studio that focuses on the design, development and digital marketing, helping businesses and individuals to reach more people and be the best in their branch.
        </p>

        <div className="content-section">
          <img src={efficiency} alt="Efficiency" />

          <div className="agency-information">
            <h3>Efficient in every way</h3>
            <p>Our working process is organized around different stages of user-friendly project development. Our goal is to create the best possible position on the market for our clients with good user experience and clean interface. Maximizing the chances to keep the users.</p>
          </div>
        </div>

        <div className="content-section determination">
          <div className="agency-information">
            <h3>Determination is the key</h3>
            <p>We search market, users, and competitors to create a unique and best possible solution. The process of reaching the right audience is slower, but have a better impact on your business. Contact us if you have any questions for us and we will be happy to help.</p>
            <button className="btn btn-yellow">Our work</button>
          </div>
          <img src={determination} alt="Determination" />
        </div>
      </div>

      <div className="evaluation-process">
        <img src={evaluation} alt="Evaluation" />

        <div className="ep-text">
          <h1>Evaluation Process</h1>
          <p>The process of evaluation goes from research, sketching, design, testing, development, and even printing if the project requires, to make sure that everything is perfect. To cover all stages of the process requires dedication, time and perfection, which we give to our clients.</p>
          <p> Being in contact with clients, talking to them, showing them our working process and research
results helps them feel like they are part of our team and co-creators of their own brand.</p>
        </div>
      </div>


    </div>
  )
}

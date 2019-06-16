import React from 'react';
import img1 from '../assets/images/ConceptStudio/img1.png';
import img2 from '../assets/images/ConceptStudio/img 2.png';
import img3 from '../assets/images/ConceptStudio/img 3.png';
import img4 from '../assets/images/ConceptStudio/img 4.png';


export default function ConceptStudio(props) {
  return (
    <div id="single-work">
      <div className="title">
        <h1>Concept Studio</h1>
        <p className="subtitle">
          Logo & branding, website design and digital <br />marketing campaign for the creative agency <br />from Serbia.
        </p>
      </div>


      <div className="wide">
        <img src={img1} alt="Concept Studio" />
      </div>
      <div className="condensed">
        <h3>The best in what they do</h3>
        <div className="w-text">
          <p>Concept Studio is a printing company that create only high-quality products. Their focus is a group of people willing to go one step extra for the best results. They wanted to have a serious and elegant approach with a touch of intensity.</p>
          <p>We started with basic market research, which was a challenging process, and competitive analysis. After we knew what clients expect from them, sketching and constructing the logo was the next step. Since the word “Concept” is connected to the “idea” we thought to give a shot at the abstract view of a light bulb. The client liked that and we started to sketch.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img2} alt="Concept Studio" />
      </div>
      <div className="condensed">
        <h3>Brand building</h3>
        <div className="w-text">
          <p>Building a brand requires a lot of research, testings, and when it comes to logo sketching. But the brand with a good base, have better chances to succeed.</p>
          <p>After constructing a logo we showed the client how will look like printed on their products (boxes, business cards, wrapping, shirts, etc.). Everything needed to be perfect and since they were not rushing us we took our time and created this with a high-quality.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img3} alt="Concept Studio" />
      </div>
      <div className="condensed">
        <h3>User-oriented website increases chances of conversion</h3>
        <div className="w-text">
          <p>Since we did our research when we were creating a brand identity, now was much easier for us to create a good user-centered website. Our work was relieved, but we still needed to see how users will react, what they want to see. There is also contact, portfolio, and testimonials that played an important role here, but we also needed to think about SEO, since we also are
creating a digital marketing strategy for them.</p>
          <p>Keeping everything simple is easy to reach is always the best solution, so that was exactly what we did.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img4} alt="Concept Studio" />
      </div>
    </div>
  )
}
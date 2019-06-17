import React from 'react';
import NextPage from '../components/NewPage.jsx';
import img1 from '../assets/images/Sana/Sana_img 1.png';
import img2 from '../assets/images/Sana/Sana_img 2.png';
import img3 from '../assets/images/Sana/Sana_img 3.png';
import img4 from '../assets/images/Sana/Sana_img 4.png';
import img5 from '../assets/images/Sana/Sana_img 5.png';
import img6 from '../assets/images/Sana/Sana_img 6.png';

import pomocPreview from '../assets/images/Pomoc Srpskoj Deci/Pomoc Srpskoj Deci Preview img.png';

export default function Sana(props) {
  let nextPage = {
    name: 'Pomoc Srpskoj deci',
    work: 'Brand identity design',
    preview: pomocPreview,
    link: '/works/pomoc-srpskoj-deci'
  }
  return (
    <div id="single-work">
      <div className="title">
        <h1>Sana</h1>
        <p className="subtitle">
          Logo & brand identity design for a local<br /> entreprepeur who specializes in invitation cards<br /> design and printing.
        </p>
      </div>


      <div className="wide">
        <img src={img1} alt="Sana" />
      </div>
      <div className="condensed">
        <section>
          <h3>Brand that will make a way to the top</h3>
          <div className="w-text">
            <p>The goal here is simple, create a brand that will stand out on the market with a unique and
  different design. Since we are creating this for a female entrepreneur we need to show her feminine side with a touch of creativity.</p>
            <p>She designs and prints invitation cards on an artistic and very unique way. She is creative, but don’t know how to make a brand out of her craft, that is why she invited us to help her do that right. </p>
          </div>
        </section>

        <section>
          <h3>Exploring the market</h3>
          <div className="w-text">
            <p>This is a pretty basic step of our process. We conduct competitive analysis, user research and target audience, after that we know exactly what to do. Without that, it is very hard to find the right solution and create something unique that will stand out, since you don’t know what to do better than your competition.</p>
            <p>After this, and a lot of brainstorming we decided to go with the deer. The client liked the idea of feminine and tranquil female deer, but to express precision and craft, not just the art.
Sketching was the hardest part, but we managed to find the best solution for this.</p>
          </div>
        </section>
      </div>

      <div className="wide">
        <img src={img2} alt="Sana" />
      </div>
      <div className="condensed">
        <h3>Fonts and colors</h3>
        <div className="w-text">
          <p>To make a dominant appearance we’ve chosen a purple color, along with yellow and
secondary and aqua blue for tertial color. Purple will make her royalty among the competition and yellow will keep this happy/warm feeling she also wants to show. Along with aqua blue color, we wanted to express this both exciting and warm feeling in compelling combinations. Choosing a color is not an easy thing to, so we did a lot of testing to see how users will react and the feeling that will generate.</p>
          <p>The decision to go with Cyrillic font is because we wanted to keep this old font alive on this part of Europe and people liked the idea, but the font itself for the logo is our own creation.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img3} alt="Sana" />
      </div>
      <div className="condensed">
        <h3>Brand usage and variations</h3>
        <div className="w-text">
          <p>We’ve created different mockup variations of how a brand will be used. It Needed to be good both digital and printed. It’s very important that mockups are good and realistic so a user can see how their product will look like on different backgrounds and in real life. However, the level of attention we need to apply on every single pixel in logo partially shows approach to the product in general. Everything needs to be pixel perfect.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img4} alt="Sana" />
      </div>
      <div className="condensed">
        <h3>Cups and Bags</h3>
        <div className="w-text">
          <p>The colorful and exciting design of cups and a bit simple design of a bag help this brand to stand out and make an impression.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img5} alt="Sana" />
      </div>
      <div className="condensed">
        <h3>Invitation card and Envelope</h3>
        <div className="w-text">
          <p>The stylized and dynamic design concept creates a unique layout of the invitation card and envelope reinforcing the exciting sensibility of the brand.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img6} alt="Sana" />
      </div>

      <NextPage nextPage={nextPage} />
    </div>
  )
}
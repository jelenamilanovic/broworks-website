import React from 'react';
import img1 from '../assets/images/Pomoc Srpskoj Deci/Pomoc Srpskoj Deci_img 1.png';
import img2 from '../assets/images/Pomoc Srpskoj Deci/Pomoc Srpskoj Deci_img 2.png';
import img3 from '../assets/images/Pomoc Srpskoj Deci/Pomoc Srpskoj Deci_img 3.png';
import img4 from '../assets/images/Pomoc Srpskoj Deci/Pomoc Srpskoj Deci_img 4.png';
import img5 from '../assets/images/Pomoc Srpskoj Deci/Pomoc Srpskoj Deci_img 5.png';

// import img2 from '../assets/images/ConceptStudio/img 2.png';
// import img3 from '../assets/images/ConceptStudio/img 3.png';
// import img4 from '../assets/images/ConceptStudio/img 4.png';


export default function PomocSrpskojDeci(props) {
  return (
    <div id="single-work">
      <div className="title">
        <h1>Pomoc Srpskoj Deci</h1>
        <p className="subtitle">
          Logo and a few brand identity designs for a <br /> non-profit organization from Serbia.
        </p>
      </div>


      <div className="wide">
        <img src={img1} alt="Pomoc Srpskoj Deci" />
      </div>
      <div className="condensed">
        <h3>Diving into the sea of non-profit organizations</h3>
        <div className="w-text">
          <p>Being a non-profit, charity, organization nowadays is hard because there is a lot of them, some of them are just scams and it’s hard to make people believe that is real. Creating a brand for that is even harder. They hired us to help them in their mission, helping children in Serbia. We saw an opportunity to create something together that will be an example for all other similar organizations.</p>
          <p>Our first goal was creating a logo that will be memorable, long lasting and be used on any background and material. After just a few sketches we knew that will be a kid in the logo, we just needed to find a good shape.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img2} alt="Pomoc Srpskoj Deci" />
      </div>
      <div className="condensed">
        <h3>Logo Construction</h3>
        <div className="w-text">
          <p>After finding the right shape, it was not so easy for us to decide what is a better option. So, as usual, we tested it, asked other people for opinion, people how are in our target audience. At the end of the day, they have chosen this option, because they felt it’s more connected with the kids and charity.  We used golden circle rule and created as perfect as a possible design.</p>
          <p>Version 3 was the best choice from A/B testing since its shape best connects with the users.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img3} alt="Pomoc Srpskoj Deci" />
      </div>
      <div className="condensed">
        <h3>Logo testing</h3>
        <div className="w-text">
          <p>Testing a logo showed us is it good enough to be used on different materials and backgrounds, both visually and digitally. </p>
        </div>
      </div>

      <div className="wide">
        <img src={img4} alt="Pomoc Srpskoj Deci" />
      </div>
      <div className="condensed">
        <h3>Flyer design</h3>
        <div className="w-text">
          <p>Designing a flyer had one ultimate goal, convincing people to donate. The flyer needs to show people what is about, show that that is not a scam and they really do help children in Serbia. We wanted to present Serbian country and children that need help with clothes, school
material and basic stuff that every kid needs, as much as anyone can share.</p>
          <p>

            This is a charity organization, but we wanted to present all that with some style, but also to help people to see the situation those kids are in. On the flyer, there is also information on a website, phone numbers and email addresses where they can check all the information.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img5} alt="Pomoc Srpskoj Deci" />
      </div>
    </div>
  )
}
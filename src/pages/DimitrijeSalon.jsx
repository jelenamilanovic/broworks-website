import React from 'react'
import img1 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 1.png';
import img2 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 2.png';
import img3 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 3.png';
import img4 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 4.png';
import img5 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 5.png';
import img6 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 6.png';
import img7 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 7.png';
import img8 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 8.png';
import img9 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 9.png';
import img10 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 10.png';
import img11 from '../assets/images/Dimitrije Salon/Dimitrije Salon_img 11.png';


export default function DimitrijeSalon(props) {
  return (
    <div id="single-work">
      <div className="title">
        <h1>Dimitrije Salon</h1>
        <p className="subtitle">
          Logo and Brand Identity for a luxury hairsalon<br /> in Belgrade, Serbia.
        </p>
      </div>


      <div className="wide">
        <img src={img1} alt="Dimitrije Salon" />
      </div>
      <div className="condensed">
        <h3>Style and exploration</h3>
        <div className="w-text">
          <p>Dimitrije is a hairdresser specialist from Serbia who planned to open his own luxurious hairdressing salon. He reached us to help him create a luxurious logo and business cards. We took responsibility and covered everything, from design to printing, in order to achieve the perfect results. Later, we also helped him to establish a good social media presence.</p>
          <p>The client wanted to go with Cyrillic font and to include the first letter of his name “D” in the logo. Since he already had customers that will come there regularly we took that for our
persona to help us figure out what kind of logo we should build.</p>
          <p>One of our goals is maintaining consistency and provide dominant presence visual presence in clients branch.</p>
        </div>

      </div>

      <div className="wide">
        <img src={img2} alt="Dimitrije Salon" />
      </div>
      <div className="condensed">
        <h3>Sketching process</h3>
        <div className="w-text">
          <p>We had many ideas on our mind that included the cyrilic and latin letter “D”, different shapes and patterns abstract and literal. Nothing was wasted and everything has been taken into
account.</p>
          <p>Sketching is the best way of finding the right solution. It took us some time until we found it. After that, we needed to approach the brand accurately in order to achieve the best results.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img3} alt="Dimitrije Salon" />
      </div>
      <div className="wide">
        <img src={img4} alt="Dimitrije Salon" />
      </div>

      <div className="condensed">
        <h3>Logo construction, font & color</h3>
        <div className="w-text">
          <p>After finding the right shape, we needed to adjust some details and work on color and font. The client wanted to go with dark grey, instead of complete black and copper color as two
primary colors, since that will be his salon interior design colors as well.</p>
          <p>For the font, it was not easy to find a unique Cyrillic font for the text, but we did it. We took
“Oranienbaum” font for the name only, and Montserrat as a brand font for everything else.</p>
          <p>After a few revisions client decided to go with more geometric approach, that will look clean, modern and flat, but also dominant. After a few sketches se found our shape. We wanted to give at least one hint for the customers that is about very luxury haircut salon, so we kept the lines to implicate the hair on some way.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img5} alt="Dimitrije Salon" />
      </div>
      <div className="wide">
        <img src={img6} alt="Dimitrije Salon" />
      </div>
      <div className="condensed">
        <h3>Pattern design</h3>
        <div className="w-text">
          <p>Creating a pattern that will match the brand design and direction is vastly important. So we created a unique pattern in order to make clients brand recognizable and rememberable on things like a shop window, business card, bags, aprons, shirts, and many more.</p>
          <p>Using Autocad we created a stroke pattern since it will be used for printing it needs to be very precise.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img7} alt="Dimitrije Salon" />
      </div>
      <div className="condensed">
        <h3>Branding</h3>
        <div className="w-text">
          <p>This step of the process is all about creating an impactful identity on the market. As agreed with the clients, we created a business card, apron cape, shirts, the entrance of the salon, social media presence.</p>
          <p>The business card is our primary goal since we wanted to leave a powerful impact on clients customers that are not yet coming in the salon. </p>
        </div>
      </div>

      <div className="wide margin-min">
        <img src={img8} alt="Dimitrije Salon" />
      </div>
      <div className="wide margin-min">
        <img src={img9} alt="Dimitrije Salon" />
      </div><div className="wide margin-min">
        <img src={img10} alt="Dimitrije Salon" />
      </div><div className="wide margin-min">
        <img src={img11} alt="Dimitrije Salon" />
      </div>
    </div>
  )
}
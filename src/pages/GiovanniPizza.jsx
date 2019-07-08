import React from 'react';
import NextPage from '../components/NewPage.jsx';
import img1 from '../assets/images/Giovanni/image 1.png';
import img2 from '../assets/images/Giovanni/image 2.png';
import img3 from '../assets/images/Giovanni/image 3.png';
import img4 from '../assets/images/Giovanni/image 4.png';
import img5 from '../assets/images/Giovanni/image 5.png';
import img6 from '../assets/images/Giovanni/image 6.png';

import dimitrijeSalonPreview from '../assets/images/Dimitrije Salon/Dimitrije salon Preview img.png';

export default function GiovanniPizza(props) {
  let nextPage = {
    name: 'Dimitrije Salon',
    work: 'Brand Identity design',
    preview: dimitrijeSalonPreview,
    link: '/works/dimitrije-salon'
  }
  return (
    <div id="single-work">
      <div className="title">
        <h1>Giovanni Pizza</h1>
        <p className="subtitle">
          Mobile app design to create, buy and deliver<br /> pizza to his customers.
        </p>
      </div>


      <div className="wide">
        <img src={img1} alt="Giovanni" />
      </div>
      <div className="condensed">
        <section>
          <h3>The Task</h3>
          <div className="w-text">
            <p>The client hired us to create an exciting app for his pizza place. He wanted to have an option for customers to create their own pizza, or just buy one from their menu. To be able to select a delivery option or just to pick up by themselves from a nearby restaurant. In the app, payment was also an option. If customers are, let's say, vegans, a client asked for a solution so they can find vegan pizzas quickly and easily.</p>
            <p>We accepted the task and started with researching clients market, competitors, customers, etc. Point was to know exactly what his customers want, how they behave, and how they react in certain situations. Everything was important, so we started to work straight away.</p>
          </div>
        </section>
        {/* 
        <section className="last">
          <h3>Exploring the market</h3>
          <div className="w-text">
            <p>This is a pretty basic step of our process. We conduct competitive analysis, user research and target audience, after that we know exactly what to do. Without that, it is very hard to find the right solution and create something unique that will stand out, since you don’t know what to do better than your competition.</p>
            <p>After this, and a lot of brainstorming we decided to go with the deer. The client liked the idea of feminine and tranquil female deer, but to express precision and craft, not just the art.
Sketching was the hardest part, but we managed to find the best solution for this.</p>
          </div>
        </section> */}
      </div>

      <div className="wide">
        <img src={img2} alt="Giovanni" />
      </div>
      <div className="condensed">
        <h3>Selecting Pizza</h3>
        <div className="w-text">
          <p>By selecting any pizza it opens a screen with an image of selected pizza in the background, title and price on the top, and extend the option for ingredients, pizza size, and CTA button. By default “Medium” size is selected and highlighted to be visible. Red CTA button color is clearly visible on this background and creates a desire for a customer to click on it.</p>
        </div>
      </div>

      <div className="wide">
        <img src={img3} alt="Giovanni" />
      </div>
      <div className="condensed">
        <h3>Make your pizza</h3>
        <div className="w-text">
          <p>This is a great option for users, and we wanted to make it even greater by adding real products and how they look when they are put on pizza, like melted cheese, baked dough or even grilled red onion. The key here is to make a smooth transition, easy to choose ingredients with a price on each one. There is a total price in the top right corner so customers can see how much they spent on this pizza before they check out. The small number on the bottom left corner indicates a number of ingredients you have put (max is 5).</p>
        </div>
      </div>

      <div className="wide">
        <img src={img4} alt="Giovanni" />
      </div>
      <div className="condensed">
        <h3>Order and Delivery</h3>
        <div className="w-text">
          <p>Even in a checkout phase, customers can still cancel delivery or add more of the same pizzas they have selected. They can see a total price, fees, etc. </p>
          <p>
            Customers are able to get their food delivered on their address or to pick it up by themselves from the nearest restaurant. Online payment method is also available. In case customers want to pick up food by himself, he can choose to pay when he gets there, instead of online payment.
          </p>
        </div>
      </div>

      <div className="wide">
        <img src={img5} alt="Giovanni" />
      </div>
      <div className="wide">
        <img src={img6} alt="Giovanni" style={{ width: '98%' }} />
      </div>

      <NextPage nextPage={nextPage} />
    </div>
  )
}
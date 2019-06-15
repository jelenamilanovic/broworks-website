import React from 'react';

export default function LetsWorkTogether() {
  let services = [
    "Web Design",
    "App Design",
    "Logo & Branding",
    "Graphic Design",
    "Digital Marketing"
  ]


  return (
    <div id="lets-work-together">
      <h1 className="title extrabold">Let's work together</h1>

      <div className="service-ctrl">
        <div className="service-ctrl-title">Choose a service</div>

        <div className="services">
          {services.map(service => <h4> {service} </h4>)}
        </div>
      </div>
      <form>
        <div className="ctrl">
          <input type="text" placeholder="Your name*" />
        </div>

        <div className="ctrl">
          <input type="text" placeholder="Email address*" />
        </div>

        <div className="ctrl">
          <input type="text" placeholder="Project details*" />
        </div>

        <button className="ctrl btn btn-yellow">Send</button>
      </form>

    </div>
  );
}
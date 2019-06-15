import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './assets/style/index.scss';
import Works from './pages/Works.jsx';
import Agency from './pages/Agency.jsx';

import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import BestWork from './components/BestWorks.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import StandOut from './components/StandOut.jsx';
import WhatPeopleSay from './components/WhatPeopleSay.jsx';
import LetsWorkTogether from './components/LetsWorkTogether.jsx';
import Footer from './components/Footer.jsx';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />

          {/* <Intro />
          <BestWork />
          <WhatWeDo />
          <StandOut />
          <WhatPeopleSay />
          <LetsWorkTogether />
          <Footer /> */}

          <Route path="/works" component={Works} />
          <Route path="/agency" component={Agency} />
        </div>
        <LetsWorkTogether />
        <Footer />
      </Router>

    )
  }
}

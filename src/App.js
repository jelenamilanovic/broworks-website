import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './assets/style/index.scss';
import Home from './pages/Home.jsx';
import Works from './pages/Works.jsx';
import Agency from './pages/Agency.jsx';
import ConceptStudio from './pages/ConceptStudio.jsx';
import PomocSrpskojDeci from './pages/PomocSrpskojDeci.jsx';
import Sana from './pages/Sana.jsx';
import DimitrijeSalon from './pages/DimitrijeSalon.jsx';

import Header from './components/Header.jsx';
import LetsWorkTogether from './components/LetsWorkTogether.jsx';
import Footer from './components/Footer.jsx';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={Home} />

          <Route exact path="/works" component={Works} />
          <Route path="/works/concept-studio" component={ConceptStudio} />
          <Route path="/works/pomoc-srpskoj-deci" component={PomocSrpskojDeci} />
          <Route path="/works/sana" component={Sana} />
          <Route path="/works/dimitrije-salon" component={DimitrijeSalon} />

          <Route path="/agency" component={Agency} />
        </div>
        <LetsWorkTogether />
        <Footer />
      </Router>

    )
  }
}

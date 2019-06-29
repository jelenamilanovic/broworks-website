import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx';
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

import uc from './assets/images/uc.jpg';
import WOW from "wow.js";
export default class App extends Component {
  state = {
    clicks: 0
  }

  incrementClicks = () => {
    let clicks = this.state.clicks + 1;
    this.setState({ clicks });
  }

  render() {

    let mainView = (
      <>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />

          <Route exact path="/works" component={Works} />
          <Route path="/works/concept-studio" component={ConceptStudio} />
          <Route path="/works/pomoc-srpskoj-deci" component={PomocSrpskojDeci} />
          <Route path="/works/sana" component={Sana} />
          <Route path="/works/dimitrije-salon" component={DimitrijeSalon} />

          <Route path="/agency" component={Agency} />
        </Switch>
      </>
    )

    let foot = (
      <>
        <LetsWorkTogether />
        <Footer />
      </>
    )

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>

        <div className="app" onClick={this.incrementClicks}>
          {
            this.state.clicks > 10 ? mainView : mainView
          }
        </div>
        {
          this.state.clicks > 10 ? foot : foot
        }

      </Router>

    )
  }

  componentDidMount() {
    new WOW().init();
  }
}

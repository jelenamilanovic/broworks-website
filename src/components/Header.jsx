import React, { useEffect } from 'react';
import logo from '../assets/images/logo-horizontal.svg';
import { Link, withRouter } from "react-router-dom";
import withRedirection from './withRedirection';

function Header(props) {
  let hClass = props.location.pathname === '/' ? 'yellow' : '';
  let navigation = [
    { title: 'Works', isHref: false, path: '/works' },
    { title: 'Agency', isHref: false, path: '/agency' },
    { title: 'Contact', isHref: true, path: '#lets-work-together' },
    { title: 'Blog', isHref: false, path: '/blog' }
  ];

  let activeRoute = props.location.pathname;

  return (
    <header className={hClass}>

      <Link to='/' >
        <img src={logo} alt="Broworks-logo" className="logo" />
      </Link>

      <nav className="mobile-hidden">
        <ul>
          {
            navigation.map((route, i) => {
              let rClass = route.path == activeRoute ? 'active' : '';
              console.log(route.path, activeRoute)
              if (route.isHref)
                return (
                  <li key={i} className={rClass} >
                    <a href={route.path} onClick={props.redirect}>
                      <h6>{route.title}</h6>
                    </a>
                  </li>
                )
              else
                return (
                  <li key={i} className={rClass} >
                    <Link to={route.path}>
                      <h6>{route.title}</h6>
                    </Link>
                  </li>
                )
            })
          }
        </ul>
      </nav>

      <a href='#lets-work-together' className='hire-us mobile-hidden' onClick={props.redirect} >
        <button className="btn btn-blue">HIRE US</button>
      </a>

    </header>
  );
}
export default withRouter(withRedirection(Header, 'lets-work-together'));
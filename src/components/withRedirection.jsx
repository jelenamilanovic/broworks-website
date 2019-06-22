import React, { Component } from 'react';
import { thisTypeAnnotation } from '@babel/types';

export default function withRedirection(WComponent, linkID) {
  class Extended extends Component {
    constructor(props) {
      super(props);
    }
    redirect = e => {
      e.preventDefault();
      let el = document.getElementById(linkID);
      window.scrollTo(0, el.getBoundingClientRect().top);
    }

    render() {
      return (
        <>
          <WComponent redirect={this.redirect} {...this.props} />
        </>

      )
    }
  }

  return Extended;
}
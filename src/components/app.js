import React, { Component } from 'react';
import style from '../stylesheets/styles.scss';


import Header from './header';
import About from './about';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <About />
      </div>
    );
  }
}

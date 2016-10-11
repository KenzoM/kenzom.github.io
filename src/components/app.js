import React, { Component } from 'react';
import style from '../stylesheets/styles.scss';


import Header from './header';
import About from './about';
import Footer from './footer';
import Skills from './skills';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <About />
        <Skills />
      </div>
    );
  }
}

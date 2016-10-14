import React, { Component } from 'react';
import style from '../stylesheets/styles.scss';


import Header from './header';
import Intro from './intro';
import About from './about';
import Footer from './footer';
import Skills from './skills';
import Projects from '../containers/projects';
import Contact from './contact'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

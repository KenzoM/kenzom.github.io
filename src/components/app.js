import React, { Component } from 'react';
import style from '../stylesheets/styles.scss';


import Header from './header';
import Intro from './intro';
import Footer from './footer';
import Skills from './skills';
import Projects from '../containers/projects';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

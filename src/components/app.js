import React, { Component } from 'react';
import style from '../stylesheets/styles.scss';


import Header from './header';
import About from './about';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

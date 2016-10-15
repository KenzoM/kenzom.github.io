import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Element    = Scroll.Element;

export default class Intro extends Component{
  render(){
    return (
      <Element id="intro" name="intro-section" className="element">
        <div className="typewriter">
          <h1>Hello world! </h1>
          <div className="home-icons">
            <a href="https://www.dropbox.com/s/241w28bx3wvd7f4/Resume%202012%20Kenzo.pdf?dl=1"><i className="icon fa fa-file-pdf-o fa-5x"></i></a>
            <a href="https://github.com/neotriz"><i className="icon fa fa-github fa-5x"></i></a>
            <a href="https://www.linkedin.com/in/kenzo-mendoza-654b1428"><i className="icon fa fa-linkedin-square fa-5x"></i></a>
          </div>
        </div>
      </Element>
    )
  }
}

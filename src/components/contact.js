import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Element    = Scroll.Element;

export default class Contact extends Component {
  render(){
    return(
      <Element name="contact-section" className="element">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Contact</h1>
              <hr />
            </div>
            <div className="my-container">
              <a target="_blank" href="https://www.dropbox.com/s/241w28bx3wvd7f4/Resume%202012%20Kenzo.pdf?dl=1">
                <i className="contact-icn fa fa-file-pdf-o fa-5x"></i>
              </a>
              <a target="_blank" href="https://twitter.com/KenzoJam">
                <i className="contact-icn fa fa-twitter-square fa-5x"></i>
              </a>
              <a target="_blank" href="https://github.com/Neotriz">
                <i className="contact-icn fa fa-github fa-5x"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/kenzo-mendoza">
                <i className="contact-icn fa fa-linkedin fa-5x"></i>
              </a>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

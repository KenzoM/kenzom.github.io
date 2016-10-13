import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return (
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Kenzo Logo</a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about-section">About</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#project-section">Projects</a></li>
                <li><a href="#contact-section">Contact</a></li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

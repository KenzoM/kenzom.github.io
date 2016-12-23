import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Link = Scroll.Link;

export default class Header extends Component{
  render(){
    return (
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link
                activeClass="active"
                className="Intro navbar-brand nav-cursor"
                to="intro-section"
                spy={true}
                smooth={true}
                offset={-45}
                duration={1000}> <img className="brand-logo" src="/src/image/kenzo-logo.svg" />
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav-cursor nav navbar-nav navbar-right">
                <li>
                  <Link activeClass="active" className="Skills" to="skills-section" spy={true} smooth={true} offset={-45} duration={1000} >Skills</Link>
                </li>
                <li>
                  <Link activeClass="active" className="Project" to="project-section" spy={true} smooth={true} offset={-45} duration={1000} >Projects</Link>
                </li>
                <li>
                  <Link activeClass="active" className="Contact" to="contact-section" spy={true} smooth={true} offset={-45} duration={1000} >Contact</Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

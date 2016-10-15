import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Link = Scroll.Link;

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
              <Link activeClass="active" className="Intro navbar-brand nav-cursor" to="intro-section" spy={true} smooth={true} offset={-45} duration={1000} >Kenzo Logo</Link>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav-cursor nav navbar-nav navbar-right">
                <li><Link activeClass="active" className="About" to="about-section" spy={true} smooth={true} offset={-45} duration={1000} >About</Link></li>
                <li><Link activeClass="active" className="Skills" to="skills-section" spy={true} smooth={true} offset={-45} duration={1000} >Skills</Link></li>
                <li><Link activeClass="active" className="Project" to="project-section" spy={true} smooth={true} offset={-45} duration={1000} >Project</Link></li>
                <li><Link activeClass="active" className="Contact" to="contact-section" spy={true} smooth={true} offset={-45} duration={1000} >Contact</Link></li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

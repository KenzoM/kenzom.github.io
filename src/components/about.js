import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Element  = Scroll.Element;
const Link   = Scroll.Link;

export default class About extends Component {
  render(){
    return(
      <Element name="intro-section" className="element">
        <div className="container">
          <div className="row about">
            <div className="col-sm-12 text-center">
              <h1>My Portfolio</h1>
              <hr className="highlight-text" />
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <img className="img-responsive center-block bio-picture" src="src/image/kenzo-comp.png" />
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <h3>Hi! My name is <span className="highlight-text">Kenzo</span></h3>
              <p className="about-bio">I&#39;ve learned how to program
                through various resources, most notably <a href="https://www.freecodecamp.com"> <span className="highlight-text2">FreeCodeCamp</span></a>,&nbsp;
                <a href="https://wwww.udemy.com"><span className="highlight-text2">Udemy</span></a> and <a href="https://www.udacity.com"><span className="highlight-text2">Udacity</span></a>.
                <br />
                My concentration of studies is in front-end development but I am currently working on back-end development
                to become a <u>full-stack web-developer</u>.
                <br />
                I host/volunteer <a href="https://www.meetup.com/Free-Code-Camp-SF/"><span className="highlight-text2">FreeCodeCamp's Meetup</span></a> weekly in San Francisco to help other self-taught programmers like myself on various topics such as
                projects, algorithm, data-structure. I enjoying tackling problems together!
                <br />
                In my spare time, I go out running here in San Francisco, <a href="https://neotriz.tumblr.com/">travel around the world</a>,
                and play <a href="https://www.youtube.com/user/KAMFlamenco">flamenco music</a>.
                <br />
              </p>
              <div className="btn-three-d">
                  <span className="content"><a href="https://www.dropbox.com/s/241w28bx3wvd7f4/Resume%202012%20Kenzo.pdf?dl=1">Resume <i className="fa fa-file-pdf-o fa-1x"></i></a></span>
              </div>
              <div className="btn-three-d">
                <Link activeClass="active" className="Contact" to="contact-section" spy={true} smooth={true} offset={-45} duration={2000}><span className="content">Contact me!</span></Link>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

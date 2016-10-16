import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Element  = Scroll.Element;
const Link   = Scroll.Link;


export default class About extends Component {
  render(){
    return(
      <Element name="about-section" className="element">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>About</h1>
              <hr className="highlight-text" />
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <img className="img-responsive center-block bio-picture" src="src/image/kenzo-comp.png" />
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <h3>Hi! My name is <span className="highlight-text"> Kenzo</span></h3>
              <p className="about-bio">I&#39;ve learned how to program
                through various, most notably <span className="highlight-text2">FreeCodeCamp</span>, <span className="highlight-text2">Udemy</span> and <span className="highlight-text2">Udacity</span>.
                <br />
                I specialize in front-end but I am currently working on more back-end
                to become a full-stack web-developer.
                <br />
                In my spare time, I go out running here in San Francisco, <a href="https://neotriz.tumblr.com/">travel around the world</a>,
                and play <a href="https://www.youtube.com/user/KAMFlamenco">flamenco music</a>.
                <br />
              </p>
              <div className="contact-btn">
                <Link activeClass="active" className="Contact" to="contact-section" spy={true} smooth={true} offset={-45} duration={2000}><span className="content">Contact me!</span></Link>
              </div>
            </div>

          </div>
        </div>
      </Element>
    )
  }
}

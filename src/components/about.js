import React, { Component } from 'react';

export default class About extends Component {
  render(){
    return(
      <div>
        <span className="anchor" id="about-section"></span>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>About</h1>
              <hr />
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <img className="img-responsive center-block bio-picture" src="src/image/kenzo.png" />
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <h3>Hi! My name is <span className="highlight-text"> Kenzo</span></h3>
              <p className="about-bio">I&#39;ve learned how to program
                through various, most notably <span className="highlight-text2">FreeCodeCamp</span>, <span className="highlight-text2">Udemy</span> and <span className="highlight-text2">Udacity</span>.
                <br />
                I specialize in front-end but I am currently working on more back-end
                to become a full-stack web-developer.
                <br />
                In my spare time, I go out running here in San Francisco, travel around the world,
                and play flamenco music.
                <br />
              </p>
              <div>
                <a href="#" className="contact-btn">
                  <span className="content">Contact me!</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

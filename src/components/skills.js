import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Element    = Scroll.Element;

export default class Skills extends Component{
  render(){
    return (
      <Element name="skills-section" className="element">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Skills</h1>
              <hr />
            </div>
            <div className="col-sm-12 text-center">
              <img className="skills-icon" src="/src/image/js.svg" alt="" />
              <img className="skills-icon" src="/src/image/react.svg" alt="" />
              <img className="skills-icon" src="/src/image/nodejs.svg" alt="" />
              <img className="skills-icon" src="/src/image/Logo_D3.svg" alt="" />
              <img className="skills-icon" src="/src/image/bootsrap.svg" alt="" />
              <img className="skills-icon" src="/src/image/mongo.png" alt="" />
              <img className="skills-icon" src="/src/image/jasmine.svg" alt="" />
              <img className="skills-icon" src="/src/image/git.svg" alt="" />
            </div>
            <div className="col-sm-12 text-center">
              <hr />
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

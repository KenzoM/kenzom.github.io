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
            </div>
            <div className="col-sm-12 text-center">
              <img className="skills-icon" src="/src/image/js.svg" alt="javascript logo" />
              <img className="skills-icon" src="/src/image/react.svg" alt="react logo" />
              <img className="skills-icon" src="/src/image/nodejs.svg" alt="node.js logo" />
              <img className="skills-icon" src="/src/image/Logo_D3.svg" alt="d3.js logo" />
              <img className="skills-icon" src="/src/image/bootsrap.svg" alt="bootstrap logo" />
              <img className="skills-icon" src="/src/image/mongo.png" alt="mongo logo" />
              <img className="skills-icon" src="/src/image/jasmine.svg" alt="jasmine logo" />
              <img className="skills-icon" src="/src/image/git.svg" alt="git logo" />
            </div>
            <div className="col-sm-12 text-center">
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

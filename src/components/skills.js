import React, { Component } from 'react';

export default class Skills extends Component{
  render(){
    return (
      <div>
        <span className="anchor" id="skills-section"></span>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Skills</h1>
              <hr />
            </div>
            <div className="col-sm-12 text-center">
              <img className="skills-icon" src="/src/image/js.svg" alt="" />
              <img className="skills-icon" src="/src/image/react.svg" alt="" />
              <img className="skills-icon" src="/src/image/nodejs.png" alt="" />
              <img className="skills-icon" src="/src/image/Logo_D3.svg" alt="" />
              <img className="skills-icon" src="/src/image/bootsrap.svg" alt="" />
              <img className="skills-icon" src="/src/image/mongo.png" alt="" />
              <img className="skills-icon" src="/src/image/jasmine.svg" alt="" />
              <img className="skills-icon" src="/src/image/git.png" alt="" />
            </div>
            <div className="col-sm-12 text-center">
              <hr />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

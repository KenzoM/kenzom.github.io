import React, { Component } from 'react';

export default class Projects extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>Projects</h1>
            <hr />
          </div>
          <div className="my-container">
            <div className="project border">Blue</div>
            <div className="project border">Blue</div>
            <div className="project border">Blue</div>
            <div className="project border">Blue</div>
          </div>
        </div>
      </div>
    )
  }
}

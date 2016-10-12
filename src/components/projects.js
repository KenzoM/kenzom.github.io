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
            <div className="project">
              <img src="/src/image/simon.png" />
              <h3 className="project-title text-center">Title</h3>
              <h4 className="text-center"> This is some description </h4>
              <p className="text-center"> Links </p>
            </div>
            <div className="project">
              <img src="/src/image/heatmap.png" />
              <h3 className="project-title text-center">Title</h3>
              <h4 className="text-center"> This is some description </h4>
              <p className="text-center"> Links </p>
            </div>
            <div className="project">
              <img src="/src/image/game-of-life.png" />
              <h3 className="project-title text-center">Title</h3>
              <h4 className="text-center"> This is some description </h4>
              <p className="text-center"> Links </p>
            </div>
            <div className="project">
              <img src="/src/image/map.png" />
              <h3 className="project-title text-center">Title</h3>
              <h4 className="text-center"> This is some description </h4>
              <p className="text-center"> Links </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

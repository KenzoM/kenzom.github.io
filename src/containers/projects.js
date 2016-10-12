import React, { Component } from 'react';

export default class Projects extends Component {
  render(){
    return(
      <div>
        <span className="anchor" id="project-section"></span>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Projects</h1>
              <hr />
            </div>
            <div className="my-container">
              <div className="project">
                <div className="project-image">
                  <div className="project-hover">
                    <div className="project-hover-content">
                      <a href="#" target="_blank">
                        <i className="fa fa-cogs fa-2x"></i>
                        <p>View Demo</p>
                      </a>
                      <a className="hidden-xs" href="#" target="_blank">
                        <i className="fa fa-file-code-o fa-2x"></i>
                        <p>View Source</p>
                        </a>
                    </div>
                  </div>
                  <img src="/src/image/simon.png" />
                </div>
                <div className="project-caption">
                  <h2 className="project-title text-center">Title</h2>
                  <h4 className="text-center"> This is some description </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

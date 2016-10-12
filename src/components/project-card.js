import React, { Component } from 'react';

export default class ProjectCard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="project">
        <div className="project-image">
          <div className="project-hover">
            <div className="project-hover-content">
              <a href={this.props.linkDemo} target="_blank">
                <i className="fa fa-cogs fa-2x"></i>
                <p>View Demo</p>
              </a>
              <a className="hidden-xs" href={this.props.linkProject} target="_blank">
                <i className="fa fa-file-code-o fa-2x"></i>
                <p>View Source</p>
                </a>
            </div>
          </div>
          <img src={this.props.picture} />
        </div>
        <div className="project-caption">
          <h2 className="project-title text-center">{this.props.projectTitle}</h2>
          <h4 className="text-center">{this.props.projectDescription}</h4>
        </div>
      </div>
    )
  }
}

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
              <a href={this.props.linkDemo}>
                <i className="fa fa-cogs fa-2x"></i>
                <p>View Demo</p>
              </a>
              <a href={this.props.linkProject}>
                <i className="fa fa-file-code-o fa-2x"></i>
                <p>View Source</p>
              </a>
              <div className="description">
                <p>{this.props.projectDescription}</p>
              </div>
            </div>
          </div>
          <img src={this.props.picture} />
        </div>
        <div className="project-caption">
          <h2 className="project-title text-center">{this.props.projectTitle}</h2>
          <h4 className="text-center">{this.props.projectTags}</h4>
        </div>
      </div>
    )
  }
}

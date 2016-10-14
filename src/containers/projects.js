import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../components/project-card';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.renderProjects = this.renderProjects.bind(this);
  }
  renderProjects(){
    return this.props.projects.map(project =>{
      return (
        <ProjectCard
          key ={project.projectTitle}
          linkDemo ={project.linkDemo}
          linkProject ={project.linkProject}
          picture ={project.picture}
          projectDescription ={project.projectDescription}
          projectTags ={project.projectTags}
          projectTitle ={project.projectTitle}
        />
      )
    })
  }
  render(){
    return(
      <div id="projects">
        <span className="anchor" id="project-section"></span>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Projects</h1>
              <hr />
            </div>
            <div className="my-container">
              {this.renderProjects()}
              <div className="more-projects">
                <a href="http://codepen.io/neotriz/pens/popular/" className="codepen-btn">
                  <span className="content">
                    More stuff in Codepen  <i className="fa fa-codepen fa-2x"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.info
  };
}
export default connect(mapStateToProps)(Projects)

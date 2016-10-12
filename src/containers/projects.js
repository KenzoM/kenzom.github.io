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
          projectTitle ={project.projectTitle}
        />
      )
    })
  }
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
              {this.renderProjects()}
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

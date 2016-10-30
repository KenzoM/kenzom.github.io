import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../components/project-card';
import Scroll from 'react-scroll';
const Element    = Scroll.Element;

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
      <Element name="project-section" className="element">
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
      </Element>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.info
  };
}
export default connect(mapStateToProps)(Projects)

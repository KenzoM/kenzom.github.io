import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return (
      <div className="jumbotron">
        <div className="container">
          <div className ="row">
            <div className="col-sm-12 col-md-4">
              <img src="../src/image/kenzo.png" className="img-responsive img-circle center-block" alt="Profile Picture" />
            </div>
            <div className="col-sm-12  col-md-8  text-center">
              <h1>Hello there!</h1>
              <p>My name is Kenzo. I am a front-end web developer</p>
              <p>Self-taught, but ambtious!</p>
              <a href="https://www.dropbox.com/s/241w28bx3wvd7f4/Resume%202012%20Kenzo.pdf?dl=1"><i className="icon fa fa-file-pdf-o fa-5x"></i></a>
              <a href="https://www.linkedin.com/in/kenzo-mendoza-654b1428"><i className="icon fa fa-linkedin-square fa-5x"></i></a>
              <a href="https://codepen.io/neotriz/"><i className="icon fa fa-codepen fa-5x"></i></a>
              <a href="https://github.com/neotriz"><i className="icon fa fa-github fa-5x"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

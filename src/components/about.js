import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return (
      <div className="jumbotron">
        <div className="container">
          <div className ="row">
            <div className="col-sm-12 col-md-4">
              <img src="../src/image/kenzo.png" className="img-responsive img-circle" alt="Profile Picture" />
            </div>
            <div className="col-sm-12  col-md-8  text-center">
              <h1>Hello there!</h1>
              <p>My name is Kenzo. I am a front-end web developer</p>
              <p>Self-taught, but ambtious!</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

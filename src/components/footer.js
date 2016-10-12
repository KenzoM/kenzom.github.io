import React, { Component } from 'react';

export default class Footer extends Component{
  render(){
    return (
      <div className="navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-text pull-left footer-copyright">
            © 2016 Kenzo Mendoza
          </div>
          <div className="navbar-text pull-right">
      			<a href="https://www.linkedin.com/in/kenzo-mendoza-654b1428"><i className="icon fa fa-linkedin fa-2x"></i></a>
      			<a href="https://twitter.com/KenzoJam"><i className="icon fa fa-twitter fa-2x"></i></a>
      			<a href="https://github.com/neotriz"><i className="icon fa fa-github fa-2x"></i></a>
      		</div>
        </div>
      </div>
    )
  }
}

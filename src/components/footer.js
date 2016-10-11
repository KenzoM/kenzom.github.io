import React, { Component } from 'react';

export default class Footer extends Component{
  render(){
    return (
      <div className="navbar-default navbar-fixed-bottom" role="navigation">
        <div className="container">
          <div className="navbar-text pull-left footer-copyright">
            © 2016 Kenzo Mendoza
          </div>
          <div className="navbar-text pull-right">
      			<a href="#"><i className="icon fa fa-linkedin fa-2x"></i></a>
      			<a href="#"><i className="icon fa fa-twitter fa-2x"></i></a>
      			<a href="#"><i className="icon fa fa-github fa-2x"></i></a>
      		</div>
        </div>
      </div>
    )
  }
}

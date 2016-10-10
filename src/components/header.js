import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo"></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

    )
  }
}

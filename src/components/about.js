import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return (
      <div className = "about border">
        <div className ="container">
          <div className="row">
            <div className="col s3 border">
              <img src="../src/image/kenzo.png" alt="profile" className="circle responsive-img" />
            </div>
            <div className="col s9 border">
              <p> Hello, this is Kenzo</p>
             </div>
          </div>
        </div>
      </div>
    )
  }
}

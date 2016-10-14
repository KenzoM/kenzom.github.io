import React, { Component } from 'react';

export default class Contact extends Component {
  render(){
    return(
      <div id="contact">
        <span className="anchor" id="contact-section"></span>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Contact</h1>
              <hr />
            </div>
            <div className="col-sm-12">
              <ul className="contact-list">
                <li><p><a href="https://www.dropbox.com/s/241w28bx3wvd7f4/Resume%202012%20Kenzo.pdf?dl=1"><i className="fa fa-file-pdf-o fa-2x"></i></a> Resume</p></li>
                <li><p><i className="fa fa-envelope-o fa-2x"></i> kenzom954@gmail.com</p></li>
                <li><p><a href="https://twitter.com/KenzoJam"><i className="fa fa-twitter fa-2x"></i></a> @KenzoJam</p></li>
                <li><p><a href="https://github.com/neotriz"><i className="fa fa-linkedin fa-2x"></i></a> ../in/kenzo-mendoza</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

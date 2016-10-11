import React, { Component } from 'react';

export default class Projects extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>Projects</h1>
            <hr />
          </div>
          <div className="col-sm12">
            <div className="card text-center project">
          		<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzE4IiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMxOCAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTRmZTA1OGRkZmIgdGV4dCB7IGZpbGw6cmdiYSgyNTUsMjU1LDI1NSwuNzUpO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpIZWx2ZXRpY2EsIG1vbm9zcGFjZTtmb250LXNpemU6MTZwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTRmZTA1OGRkZmIiPjxyZWN0IHdpZHRoPSIzMTgiIGhlaWdodD0iMTgwIiBmaWxsPSIjNzc3Ii8+PGc+PHRleHQgeD0iMTE4LjA4NTkzNzUiIHk9Ijk3LjIiPjMxOHgxODA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" className="card-img-top" alt="Card image" />

          		<div className="card-block">
          			<h4 className="card-title">This is a title</h4>
          			<p className="card-text">Each merged squad salts the wild porter. Should the charmed church dodge a camera? The gown litters the rhyme. Another discrete elevator defects over the target.</p>
          			<a href="http://sonarsystems.co.uk" className="btn btn-success">Button</a>
          		</div>
          	</div>
          </div>
        </div>
      </div>
    )
  }
}

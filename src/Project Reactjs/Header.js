import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import Mov from './mov.png'
export default class Moviewebsits extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-black p-fixed">
  <div class="container-fluid">
    <a class="navbar-brand text-center" href="#">
       <img src={Mov} alt="" width="100" height="40" style={{marginLeft:'560px'}} color='white' class="d-inline-block align-text-top text-center"/> 
      HitMovie.com
    </a>
  </div>
</nav>
  </div>
    
    )
  }
}

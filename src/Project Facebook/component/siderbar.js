import React from "react";
import img from './6.webp';
import './css/style.css';
import './css/main.min.css';
import './css/color.css';
import './css/responsive.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";
import Profile from "./profile";
export default function()
{

	
    return(
       <div>
<div class="widget">
<h4 class="widget-title">Shortcuts</h4>
<ul class="naves">
<li>
        <i class="ti-user"></i>
        <Link to='/'><a>Home</a></Link>
    </li>

    <li>
        <i class="ti-files"></i>
        <Link to='/profile'><Profile><a>My pages</a></Profile></Link>
    </li>
     
    
    <li>
        <i class="ti-power-off"></i>
        <Link to="/login" ><a>Logout</a></Link>
    </li>
</ul>
</div>
</div>
)
}
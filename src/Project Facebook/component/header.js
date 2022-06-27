import React from "react";
import img from './6.webp';
import './css/style.css';
import './css/main.min.css';
import './css/color.css';
import './css/responsive.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";
export default function()
{
    return(
        <div>
            <div class="topbar stick">
		<div class="logo">
			<a><img src={logo} alt=""/></a>
		</div>
		
		<div class="top-area">
			
			<ul class="setting-area">
				<li>
					<a  title="Home" data-ripple=""><i class="ti-search"></i></a>
					<div class="searched">
						<form method="post" class="form-search">
							<input type="text" placeholder="Search Friend"/>
							<button data-ripple><i class="ti-search"></i></button>
						</form>
					</div>
				</li>
				<li><a href="newsfeed.html" title="Home" data-ripple=""><i class="ti-home"></i></a></li>
				<li>
					<a href="#" title="Notification" data-ripple="">
						<i class="ti-bell"></i><span></span>
					</a>
					<div class="dropdowns">
						<span>4 New Notifications</span>
						<ul class="drops-menu">
							
							
						</ul>
						
					</div>
				</li>
			</ul>
			<div class="user-img">
				<img  alt=""/>
				<span class="status f-online"></span>
			
			</div>
			
		</div>
	</div>
        </div>
    )
}
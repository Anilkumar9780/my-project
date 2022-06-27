import React from "react";
import img from './6.webp';
import './css/style.css';
import './css/main.min.css';
import './css/color.css';
import './css/responsive.css';
import logo from './images/logo.png';
import Siderbar from './siderbar';
import Post from "./post";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
export default function()
 {
// 	const location = useLocation();
// 	console.log(location.state);
    return(
       <div>		
<section>
		<div class="feature-photo">
			<figure><img src={img}  style={{height:"400px"}} alt="..."/></figure>
			<div class="add-btn">
				<span>1205 followers</span>
				<a href="#" title="" data-ripple="">Add Friend</a>
			</div>
			<form class="edit-phto">
				<i class="fa fa-camera-retro"></i>
				<label class="fileContainer">
					Edit Cover Photo
				<input type="file"/>
				</label>
			</form>
			<div class="container-fluid">
				<div class="row merged">
					<div class="col-lg-2 col-sm-3">
						<div class="user-avatar">
							<figure>
								<img src={img} alt=".."/>
								<form class="edit-phto">
									<i class="fa fa-camera-retro"></i>
									<label class="fileContainer">
										Edit Display Photo
										<input type="file"/>
									</label>
								</form>
							</figure>
						</div>
					</div>
					<div class="col-lg-10 col-sm-9">
						<div class="timeline-info">
							<ul>
								<li class="admin-name">
								  <h5>Janice Griffith</h5>
								  
								</li>
								<li>
								
									<a>All Post</a>
									
									<a>Friends</a>
									
									<a>about</a>
									
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>



	<section>

<div class="gap gray-bg">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="row" id="page-contents">
							<div class="col-lg-3">
								<aside class="sidebar static">
									<div class="widget">
											<h4 class="widget-title">Socials</h4>
											<ul class="socials">
												<li class="facebook">
													<a title="" href="#"><i class="fa fa-facebook"></i> <span>facebook</span> <ins>45 likes</ins></a>
												</li>
												<li class="twitter">
													<a title="" href="#"><i class="fa fa-twitter"></i> <span>twitter</span><ins>25 likes</ins></a>
												</li>
												<li class="google">
													<a title="" href="#"><i class="fa fa-google"></i> <span>google</span><ins>35 likes</ins></a>
												</li>
											</ul>
										</div>
								<Siderbar></Siderbar>
																	</aside>
							</div>
							{/* <!-- sidebar --> */}
                          
	<div class="col-lg-6">
								<div class="central-meta">
									<div class="editing-info">
										<h5 class="f-title"><i class="ti-info-alt"></i> Edit Basic Information</h5>
     
										<form method="post">
											<div class="form-group half">	
											 <lable>Name :-  <span></span></lable>
											</div>
											<div class="form-group half">	
											<lable>Email Address :- <span></span></lable>
											</div>
											<div class="form-group half">	
											<lable>Date of Birth :-  <span></span></lable>
											</div>
											<div class="form-group half">	
											<lable>Gender :-  <span></span></lable>
											</div>
											
											
											
											
											
											
											<div class="submit-btns">
												<button type="button" class="mtr-btn"><span>Cancel</span></button>
												<button type="button" class="mtr-btn"><span>Update</span></button>
											</div>
										</form>
										
									</div>
								</div>	
							</div>
							<div class="col-lg-3">
								<aside class="sidebar static">
									
									<div class="widget friend-list stick-widget">
										<h4 class="widget-title">Friends</h4>
										<div id="searchDir"></div>
										<ul id="people-list" class="friendz-list">
											
											<li>
												
												<figure>
													<img src={img} alt=""/>
													<span class="status f-off"></span>
												</figure>
												<div class="friendz-meta">
													<a href="time-line.html">amy watson</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="472d263428292507202a262e2b6924282a">[email&#160;protected]</a></i>
												</div>
											</li>
											
										
										</ul>
										
									</div>
								</aside>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>	
	</section>
								
	   </div>
    )
}
import React, { Component } from 'react';
import axios from 'axios';
import Mov from'./mv1.jpg'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useLocation } from 'react-router-dom';
export default function Detail() {
	const location = useLocation();
	console.log(location.state);
    return (
      <div>
<div class="hero">
	{/* <div class="container"> */}
		{/* <div class="row">
			<div class="col-md-3">
				{/* <!-- <h1> movie listing - list</h1> *
				<ul class="breadcumb">
					<li class="active"><a href="#">kv</a></li>
					<li> <span class="ion-ios-arrow-right"></span></li>
				</ul> 
			</div>
		</div> */}
	{/* </div> */}
</div>
<div class="page-single movie-single movie_single">
	<div class="container">
		<div class="row ipad-width2">
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="movie-img sticky-sb">
						 <img src={'https://image.tmdb.org/t/p/original//' + location.state.from}/>
					<div class="movie-btn">	
						<div class="btn-transform transform-vertical red">
							 <div><a href="#" class="item item-1 redbtn"> <i class="ion-play"></i> Watch Trailer</a></div>
							 <div><a href="https://www.youtube.com/embed/o-0hcF97wy0" class="item item-2 redbtn fancybox-media hvr-grow"><i class="ion-play"></i></a></div> 
						</div>
						<div class="btn-transform transform-vertical">
							<div><a href="#" class="item item-1 yellowbtn"> <i class="ion-card"></i> Buy ticket</a></div> 
							<div><a href="https://in.bookmyshow.com" class="item item-2 yellowbtn"><i class="ion-card"></i></a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="movie-single-ct main-content">
					<h1 class="bd-hd">{location.state.name} <span><b className='text-white'> {location.state.data}</b></span></h1>
					<div class="movie-rate">
						<div class="rate">
							<i class="ion-android-star"></i>
						</div>
						<div class="rate-star">
						 <p className='text-white'>Rate This Movie: {location.state.vote}<b/>/10  <b/> Media Type:{location.state.type}</p>
							
						</div>
					</div>
					<div class="movie-tabs">
						<div class="tabs">
							<ul class="tab-links tabs-mv">
								<li class="active text-white" >{location.state.overview}</li>
							</ul>
																	</div>
					       	 		</div>
					       	 	</div>
						    </div>
						</div>
					</div>
				</div>
			</div>
		
    )
  }


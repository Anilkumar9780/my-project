import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default function Detail() {
	const location = useLocation();
	console.log(location.state);
    return (
      <div>
<div class="hero">
</div>
<div class="page-single movie-single movie_single">
	<div class="container">
		<div class="row ipad-width2">
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="movie-img sticky-sb">
						 <img src={'http://localhost/images/' + location.state.image}/>
				</div>
			</div>
			<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="movie-single-ct main-content">
					<h1 class="bd-hd">{location.state.name} <span><b className='text-white'> {location.state.date}</b></span></h1>
					<div class="movie-rate">
						<div class="rate">
							<i class="ion-android-star"></i>
						</div>
						<div class="rate-star">
						 <p className='text-white'><b/> Media Type:{location.state.type}</p>
							
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


import React, { Component } from 'react'
import './style.css';
import {Navigate, Link} from 'react-router-dom';
export default class header extends Component {
  render() {
    return (
      <div>
          <div class="head-div">
			<div class="main">
				<div class="head">
					<span>EVEST</span>
					<p>THE BIGGEST CHOICE OF THE WEB</p>
				</div>
				<div class="btn">
					<input type="button" name="" value="Log in"/>
				</div>
			</div>
		</div>
		<div class="home-page">
		 	<div class="pagnation">
				<div class="list">
					<ul>
					<Link to="/allproduct"><li>HOME</li></Link>
						<li>NEW PROJECT</li>
						<li>SPECIAL</li>
						<Link to="/allproduct"><li>ALL PRODUCTS</li></Link>
						<li>REVIEWS</li>
						<li>CONTACT</li>
						<li>FAQS</li>
					</ul>
				</div>
				<div class="search">
					<div class="search-1">
						<div class="input">
							<input type="text" name=""/>
						</div>
						<div class="btnn">
							{/* <input type="button" name="" value="Search"/> */}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="null">
			
		</div>
      </div>
    )
  }
}

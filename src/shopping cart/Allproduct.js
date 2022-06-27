import React, { Component } from 'react'
import axios from 'axios';
import './style.css';
import Dispalydata from './Dispalydata';
// import Categories from './Categories';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import imag from './16.png'
import {Navigate, Link, Router, Routes, Route} from 'react-router-dom';
import Categories from './Categories';
import categories from './Categories';
// import Tvs from './tv'
export default class listbar extends Component {
    constructor(props){
		super(props);
		this.state={
		  data:[],

		}
	  }	
	componentDidMount(){
        axios.post('http://localhost/shopping.php').then(res =>{this.setState({data:res.data})
	;});

                    }
  render() {
    return (  
      <div>
          <div class="main-categorious">
			<div class="footer">
				<div class="main-img">
					<img src={imag}/>
				</div>
		<Categories/>
				<div class="contact">
					<div class="contact-us">
						<p>FEATURED PRODUCTS</p>
					</div>
					<div class="Camera-info">
					{this.state.data.map((item)=>{
				return <div className='col-md-' key={item.id}>
					<Dispalydata image={item.image} name={item.productname} price={item.productprice}  status={item.status} ></Dispalydata>
				</div>
     })}		 
							</div>
					</div>
					<div class="list-1">
					<ul>
					<li><Link to="/allproduct">HOME</Link></li>
					  <li>NEW PROJECT</li>
					  <li>SPECIAL</li>
					  <li><Link to="/allproduct">ALL PRODUCTS</Link></li>
						<li>REVIEWS</li>
						<li>CONTACT</li>
						<li>FAQS</li>
					</ul>
				</div>
				<div class="footer-2">
					<p>Copyright <i class="fa fa-copyright" aria-hidden="true"></i>2013 Enest.Privacy Notice</p>
				</div>  
			</div>
      </div>
      </div>
    )
  }
}

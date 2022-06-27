import React, { Component } from 'react'
import axios from 'axios';
import './style.css';
import Dispalydata from './Dispalydata';
// import Categories from './Categories';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import  {  useState ,useEffect} from "react";
import imag from './16.png'
import {Navigate, Link, Router, Routes, Route} from 'react-router-dom';
import Categories from './Categories';
import categories from './Categories';
// import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
export default function Allproduct() {
	const location = useLocation();
	const id=location.state.id;
	const [state,setstate] = useState([]);
	console.log(location.state.id);
	 function getdata(){
	    let fd=new FormData();
		fd.append('id',id);
		 axios.post('http://localhost/all.php',fd).then((res)=>
		 {			
			 setstate(res.data);
			 console.log(res.data);
		 })
	 }
	 useEffect(()=>{
		 getdata();
	 })

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
					{state.map((item)=>{
				return <div className='col-md-' key={item.id}>
					<Dispalydata image={item.image} name={item.productname} price={item.productprice}  status={item.status} ></Dispalydata>
				</div>
     })}		 
							</div>
					</div>
					<div class="list-1">
					<ul>
					<li>HOME</li>
					  <li>NEW PROJECT</li>
					  <li>SPECIAL</li>
					  <li>ALL PRODUCTS</li>
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


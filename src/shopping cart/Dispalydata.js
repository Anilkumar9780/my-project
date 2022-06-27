import React, { Component } from 'react'
import {Navigate, Link} from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default class Data extends Component {
  render() {
    return (
<div class="samsung-cam">
		<div class="cam-info">
		<img src={"http://localhost/image/" + this.props.image} alt="....." />
                {/* <Link to='/detail' state={{image:this.props.image,name:this.props.name,price:this.props.price,status:this.props.status }} ><img src={"http://localhost/image/" + this.props.image} alt="....." /> </Link> */}
									<div class="sam-prc">
										<span>{this.props.name}</span>
										<p style={{color: "red"}}>Rs.{this.props.price}</p>
									</div>
									<hr class="hr2"/>
									<div class="cart-btn">
										<i class="fa fa-plus-circle iconn" aria-hidden="true"></i>
										<i class="fa fa-plus" aria-hidden="true"></i>
										<i class="fa fa-cart-plus" aria-hidden="true"></i>
										{/* <input type="submit" name="" value="Add to cart"/> */}
									</div>
								</div>
							</div>
    )
  }
}

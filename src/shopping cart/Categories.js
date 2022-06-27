import React, { Component } from 'react'
import {Navigate, Link} from 'react-router-dom';
import './style.css';
import axios from 'axios';
export default class categories extends Component {
	constructor(props){
		super(props);
		this.state={
		  data:[],
		}
	  }	
	  componentDidMount(){
		
		axios.get('http://localhost/category.php')
		.then(res =>
			{this.setState(
				{data:res.data}
				);
		 console.log(this.state.data)
	  }) .catch(error => console.log(error))
	}
  render() {
    return (
      <div>
          	<div class="categorious">
					<div class="cate-heading">
						<p>CATEGORIES</p>
					</div>
					<div className="items">
					{this.state.data.map((item)=>{
						return(
					         
						<ul>
			               <Link to={"/" +item.categoryname} state={{id:item.id}}><li>{item.categoryname}</li></Link>
							 
						</ul>)
				
  	}	)}	</div>
				</div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './style.css';
import axios from 'axios';
import {Navigate, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import DisplayData from './DisplayData';

export default class  extends Component{
	constructor(props){
		super(props);
		this.state={
		  data:[],
		}
  }
	componentDidMount(){
		
		axios.get('http://localhost/moviecat.php')
		.then(res =>
		{this.setState({data:res.data});
		//  console.log(this.state.data)
	  }) .catch(error => console.log(error))
	}
  render() { 
    return (
<div>  
<div className="page-single">
	<div className="container ">
		<div className="row">
			<div className="row">
       {this.state.data.map((item)=>{
				return <div className='col-md-2'>
					<DisplayData image={item.image} name={item.name} mtype={item.mtype} date={item.date} overview={item.overview} ></DisplayData>
				</div>
     })}		 
</div>
      </div>
      </div>
      </div>
	  
      </div>
    
						)}
  }
// }


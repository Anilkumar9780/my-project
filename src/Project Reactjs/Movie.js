import React, { Component } from 'react'
import './style.css';
import axios from 'axios';
import {Navigate, Link} from 'react-router-dom';
import MovieDisplay from './MovieDisplay';
export default class  extends Component{
	constructor(props){
		super(props);
		this.state={
		  data:[],
		}
  }
	componentDidMount(){
		
		axios.get(' https://api.themoviedb.org/3/trending/movie/day?api_key=460ede70f28006cdd5dbe5510d0323a1')
		.then(res =>
		{this.setState({data:res.data.results});
		//  console.log(this.state.data)
	  }) .catch(error => console.log(error))
	}
  render() { 
    return (
<div>  
<div class="page-single">
	<div class="container ">
		<div class="row">
			<div class="row">
       {this.state.data.map((item)=>{
				return<div class="col-md-2" key={item.id}>
	            			<MovieDisplay overview={item.overview} poster_path={item.poster_path} name={item.original_name?item.original_name:item.original_title} media_type={item.media_type} vote_average={item.vote_average} first_air_date={item.first_air_date?item.first_air_date:item.release_date}></MovieDisplay>
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


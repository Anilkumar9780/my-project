import axios from 'axios';
import React, { Component } from 'react'
import Mov from './mov.png'
import TvSeries from './Tv series';
import MovieDisplay from './MovieDisplay';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default class extends Component {
	constructor(props){
		super(props);
		this.state={
			query:'',
            data:[],
			type:'movie',
			error:"",
			error2:'',
			
		}
		this.type = this.type.bind(this);
		this.type1 = this.type1.bind(this);
	}
	
	search() {
		axios.get(`https://api.themoviedb.org/3/search/${this.state.type}?api_key=460ede70f28006cdd5dbe5510d0323a1&query=${this.state.query}&page=1`)
		.then(res => {
			this.setState({ data: res.data.results })
			if(res.data.results=='')
			{
			  this.setState({error:"Oops!",
			error2:"Record Not Found!!!"})
			}
			else{
			  this.setState({error:"",
			error2:""})
			}
			console.log(res.data.results)
		  })
		}
		type()
		{
		  this.setState({type:"movie"})
		}
		type1()
		{
		  this.setState({type:"tv"})
		}
  render() {
    return (
     <div>
<header className="ht-header">
	<div className="container">
	    <div className="top-search">
	    	<select>
				<option value="united" onClick={() => this.type()}>TV show</option>
				<option value="saab" onClick={() => this.type1()}>Movie</option>
			</select>
			<input type="text"  onChange={e=> this.setState({query:e.target.value})} placeholder="Search for a movie, TV Show or celebrity that you are looking for"/>
			<input type="button"  onClick={() => this.search()} value="Search"/>
	    </div>
	</div>
</header>
<div className="page-single">
	<div className="container ">
		<div className="row">
		<div className='container text-center my-5'>
        <h1>{this.state.error}</h1>
        <h4>{this.state.error2}</h4>
        </div>
			<div className="row">
       {this.state.data.map((item)=>{
				return<div className="col-md-2">
	          <MovieDisplay poster_path={item.poster_path} name={item.original_name?item.original_name:item.original_title} media_type={item.media_type} vote_average={item.vote_average} first_air_date={item.first_air_date?item.first_air_date:item.release_date} overview={item.overview}></MovieDisplay>
				</div>
				
     })}		 
</div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

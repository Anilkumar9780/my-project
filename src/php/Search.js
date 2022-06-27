import axios from 'axios';
import React, { Component } from 'react'
import DisplayData from './DisplayData';

export default class extends Component {
	constructor(props){
		super(props);
		this.state={
            data:[],
			name:''
		}
			}
	search(){
		let fd = new FormData();
	     fd.append('s',this.state.name);
		axios.post('http://localhost/mosearch.php',fd)
		.then(res => {
			
				this.setState({data: res.data});
		   }).catch(function(res){console.log(res)});
					   
	};
  render() {
    return (
     <div>
<header className="ht-header">
	<div className="container">
	    <div className="top-search">
	    	<select>
				<option value="united" >TV show</option>
				<option value="saab" >Movie</option>
			</select>
			<input type="text"  onChange={e=> this.setState({name:e.target.value})} placeholder="Search for a movie, TV Show or celebrity that you are looking for"/>
			<input type="button"  onClick={() => this.search()} value="Search"/>
	    </div>
	</div>
</header>
<div className="page-single">
	<div className="container ">
		<div className="row">
			<div className="row">
       {this.state.data.map((item)=>{
				return<div className='col-md-2'>
				<DisplayData image={item.image} name={item.name} mtype={item.mtype} date={item.date} overview={item.overview} ></DisplayData>
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

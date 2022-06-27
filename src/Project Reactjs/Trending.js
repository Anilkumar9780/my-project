import React, { Component } from 'react'
import Mov from'./mv1.jpg'
import './style.css';
import MovieDisplay from './MovieDisplay';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Navigate, Link} from 'react-router-dom';
import ReactPaginate from 'react-js-pagination';
export default class  extends Component{
	constructor(props){
		super(props);
		this.state={
		  data:[],
		  totalpage:0,
		  page:1,
          currentPage:0,

		}
		this.handlePageClick = this.handlePageClick.bind(this);

	  }	
	  handlePageClick(e)
	  {
		 const selectedPage = e.selected;
		 this.setState({page:selectedPage,currentPage:selectedPage})
	  }
	componentDidMount(){
		
		axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=460ede70f28006cdd5dbe5510d0323a1&page=${this.state.page}`)
		.then(res =>
		{this.setState({data:res.data.results,totalpage:res.data.total_pages});
	  console.log(this.state.totalpage)
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
				return <div className="col-md-2" key={item.id}>
	            		<MovieDisplay overview={item.overview} poster_path={item.poster_path} name={item.original_name?item.original_name:item.original_title} media_type={item.media_type} vote_average={item.vote_average} first_air_date={item.first_air_date?item.first_air_date:item.release_date}></MovieDisplay>
				</div>	
     })}		 
</div>
      </div>
      </div>
	  <nav aria-label="Page navigation example">
              
                     <ReactPaginate 
                      previousLabel={"Prev"}
                      nextLable={"next"}
                      breakLable={"..."}
                     pageClassName={"page-item"}
                     pageLinkClassName={"page-link"}
                     breakClassName={"break-me"}
                     pageCount={this.state.totalpage}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     onPageChange={this.handlePageClick}
                     // containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
					//  activeLinkClass={this.st}
                     activeClassName={"active"}
                     containerClassName={"pagination justify-content-center"}
                     
                     />
                    
                     </nav>
      </div>
	  
      </div>
    
						)}
  }
// }

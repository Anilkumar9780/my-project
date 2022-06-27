import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
class MovieDisplay extends Component {
    render() {
        return (
            <div>
                <div class="movie-item-style-2 movie-item-style-1">
							<img src={"https://image.tmdb.org/t/p/w500" + this.props.poster_path} alt={this.props.poster_path} />
							 <div class="hvr-inner">
	            			 <Link to="/more" state={{ from:this.props.poster_path,name:this.props.name,overview:this.props.overview,data:this.props.first_air_date,vote:this.props.vote_average,type:this.props.media_type }}>Read more<i className="ion-android-arrow-dropright"></i></Link>
	            			</div> 
					<div class="mv-item-infor">
						<h6><a>{this.props.name}</a></h6> 
							<p class="rate"><b>{this.props.media_type}</b><i class="ion-android-star"></i><span>{this.props.vote_average}</span>/10<p>{this.props.first_air_date}</p></p>
							</div>
					</div>
            </div>
        );
    }
}

export default MovieDisplay;

import React, { Component } from 'react'
import {Navigate, Link} from 'react-router-dom';
export default class movie extends Component {
  render() {
    return (
      
        <div className="col-md-3">
        <div className="movie-item-style-2 movie-item-style-1">
            <img src={"http://localhost/images/" + this.props.image} alt=".." /> 
             <div className="hvr-inner">.
              <Link to="/more" state={{ image:this.props.image,name:this.props.name,overview:this.props.overview,date:this.props.date,type:this.props.mtype }} >Read more<i className="ion-android-arrow-dropright"></i></Link>
            </div> 
    <div className="mv-item-infor">
        <h6><a href="#">{this.props.name}</a></h6> 
            <p className="rate"><b>{this.props.mtype}</b><i className="ion-android-star"></i><span></span><p>{this.props.date}</p></p>
            </div>
    </div>
</div>
    )
  }
}

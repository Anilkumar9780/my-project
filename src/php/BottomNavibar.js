import React, { Component } from 'react'
import Trend from './trend.png';
import Movi from './movie.png';
import Film from './film.png';
import Find from './find.png';
import {Navigate, Link} from 'react-router-dom';
export default class  extends Component {
  render() {
    return (
  <div className='fixed-bottom'>
  <div className="container  text-black w-100 p-2 " style={{cursor:"pointer",backgroundColor:"red", width:"100%" }}>
  <div className="row">
    <div className="col order-last col-auto me-auto ">
    <Link to="/movie"><img src={Movi} alt="" width="30" height="20" style={{cursor:"pointer"}}/>Movie</Link>
    </div>
    <div className="col">
     <Link  to="/search"><img src={Find} alt="" width="50" height="20"/>Search</Link> 
    </div>
    <div className="col">
    <Link to="/tvseries"><img src={Film} alt="" width="50" height="20"/>Tv Series</Link>
    </div>
    <div className="col order-first">
   <Link to="/trending"><img src={Trend} alt="" width="50" height="20"/>Trending</Link>

    </div>
  </div>
</div>  
      </div>
    )
  }
}

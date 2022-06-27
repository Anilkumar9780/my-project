import React from 'react';
import { Link } from 'react-router-dom';
import './css/style1.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default function App(props) {
        return (
   <div>
<div>

                <div className="movie-item-style-2 movie-item-style-1">
							<img src={props.image} />
							 <div className="hvr-inner">
                             <Link to="/more" state={{ name:props.name,price:props.price,image:props.image,overview:props.overview }}>Read more<i className="ion-android-arrow-dropright"></i></Link>
	            			</div> 
					<div className="mv-item-infor">
						<h6><a></a>{props.name}</h6> 
							<p className="rate"><b>Price:-{props.price}</b><i className="ion-android-star"></i><span></span><p></p></p>
							</div>
					</div>
            
            </div>
            </div>
          
        );
    }


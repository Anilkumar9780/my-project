import './css/style1.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useLocation } from 'react-router-dom';
export default function Detail() {
	const location = useLocation();
	console.log(location.state);
    return (
        <div>
<div className="hero">
	
</div>
<div className="page-single movie-single movie_single">
	<div className="container">
		<div className="row ipad-width2">
			<div className="col-md-4 col-sm-12 col-xs-12">
				<div className="movie-img sticky-sb">
						 <img src={ location.state.image}/>
					 <div className="movie-btn">	
					
					</div> 
				</div>
			</div>
			<div className="col-md-8 col-sm-12 col-xs-12">
				<div className="movie-single-ct main-content">
					<h1 className="bd-hd">{location.state.name} <span><b className='text-white'></b></span></h1>
					<div className="movie-rate">
						<div className="rate">
							<i className="ion-android-star"></i>
						</div>
						<div className="rate-star">
						 <p className='text-white'><b/><b/>Price:-${location.state.price}</p>
							
						</div>
					</div>
					<div className="movie-tabs">
						<div className="tabs">
							<ul className="tab-links tabs-mv">
								<li className="active text-white" >{location.state.overview}</li>
							</ul>
																	</div>
					       	 		</div>
					       	 	</div>
						    </div>
						</div>
					</div>
				</div>
			</div>
			
		
    )
  }


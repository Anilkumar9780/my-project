import React from "react";
import img from './6.webp';
import './css/style.css';
import './css/main.min.css';
import './css/color.css';
import './css/responsive.css';
import logo from './images/logo.png';
import Siderbar from "./siderbar";
import { useState,useEffect } from "react";
import axios from "axios";
export default function()
{
	const [image, setimage] = useState([]);
	const [comment,setcomment]=useState("");
   
	const [data,setdata]=useState([]);

    const getdata=async()=>
    {
     await axios.get('http://localhost/project.php')
     .then(res=>{
      console.log(res);
         setdata(res.data)
     });
    }
     useEffect(()=>{
      getdata();
     },[]);
   

	const addposts= ()=>
	{
	 let fd=new FormData()
	 fd.append('comment',comment);
	 fd.append('file',image);
	 axios.post('http://localhost/addpost.php',fd)
	 .then(res=>{
	   setimage("");
	   setcomment(" ");
	 }).catch(error=>{console.log(error);})
	}
   return(
    <div>
        <section>

<div class="gap gray-bg">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="row" id="page-contents">
							<div class="col-lg-3">
								<aside class="sidebar static">
									<div class="widget">
											<h4 class="widget-title">Socials</h4>
											<ul class="socials">
												<li class="facebook">
													<a title="" href="#"><i class="fa fa-facebook"></i> <span>facebook</span> <ins>45 likes</ins></a>
												</li>
												<li class="twitter">
													<a title="" href="#"><i class="fa fa-twitter"></i> <span>twitter</span><ins>25 likes</ins></a>
												</li>
												<li class="google">
													<a title="" href="#"><i class="fa fa-google"></i> <span>google</span><ins>35 likes</ins></a>
												</li>
											</ul>
										</div>
                                        <Siderbar/>
								</aside>
							</div>
							{/* <!-- sidebar --> */}
							<div class="col-lg-6">
								<div class="loadMore">
									<div class="central-meta item">
										<div class="new-postbox">
											<figure>
												<img src={img} alt=""/>
											</figure>
											<div class="newpst-input">	
												<form onSubmit={(e)=>e.preventDefault()} enctype="multipart/form-data">
													<textarea rows="2" placeholder="write something" value={comment}  onChange={e=>setcomment(e.target.value)} ></textarea>
													<div class="attachments">
														<ul>
															
														
															<li>
																<i class="fa fa-camera"></i>
																<label class="fileContainer">
																	<input  onChange={e=>setimage(e.target.files[0])} type="file"/>
																</label>
															</li>
															<li>
																<button type="submit" onClick={addposts} >post</button>
															</li>
														</ul>
													</div>
												</form>
											</div>
										</div>
									</div>
									{/* <!-- add post new box --> */}
									{data.map((item)=>{
									<div class="central-meta item">
										<div class="user-post">
											<div class="friend-info">
												<figure>
													<img src={img} alt=""/>
												</figure>
												<div class="friend-name">
													<ins><a href="time-line.html" title="">{item.name}</a></ins>
													<span>published: june,2 2018 19:PM</span>
												</div>
												<div class="post-meta">
													<img src={img} alt=""/>
													<div class="we-video-info">
														<ul>
															
														
															<li>
																<span class="comment" data-toggle="tooltip" title="Comments">
																	<i class="fa fa-comments-o"></i>
																	<ins>52</ins>
																</span>
															</li>
															<li>
																<span class="like" data-toggle="tooltip" title="like">
																	<i class="ti-heart"></i>
																	<ins>2.2k</ins>
																</span>
															</li>
															
															<li class="social-media">
																<div class="menu">
																  <div class="btn trigger"><i class="fa fa-share-alt"></i></div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-html5"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-facebook"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-google-plus"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-twitter"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-css3"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-instagram"></i></a>
																	</div>
																  </div>
																	<div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-dribbble"></i></a>
																	</div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-pinterest"></i></a>
																	</div>
																  </div>

																</div>
															</li>
														</ul>
													</div>
													<div class="description">
														
														<p>
															Curabitur world's most beautiful car in <a href="#" title="">#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
														</p>
													</div>
												</div>
											</div>
											<div class="coment-area">
												<ul class="we-comet">
																									
													<li class="post-comment">
														<div class="comet-avatar">
															<img src={img} alt=""/>
														</div>
														<div class="post-comt-box">
															<form method="post">
																<textarea placeholder="Post your comment"></textarea>
																<div class="add-smiles">
																	<span class="em em-expressionless" title="add icon"></span>
																</div>
																<div class="smiles-bunch">
																	<i class="em em---1"></i>
																	<i class="em em-smiley"></i>
																	<i class="em em-anguished"></i>
																	<i class="em em-laughing"></i>
																	<i class="em em-angry"></i>
																	<i class="em em-astonished"></i>
																	<i class="em em-blush"></i>
																	<i class="em em-disappointed"></i>
																	<i class="em em-worried"></i>
																	<i class="em em-kissing_heart"></i>
																	<i class="em em-rage"></i>
																	<i class="em em-stuck_out_tongue"></i>
																</div>
																<button type="submit"></button>
															</form>	
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
							})}
								</div>
							</div>
							
							<div class="col-lg-3">
								<aside class="sidebar static">
									
									<div class="widget friend-list stick-widget">
										<h4 class="widget-title">Friends</h4>
										<div id="searchDir"></div>
										<ul id="people-list" class="friendz-list">
												
											<li>
												
												<figure>
													<img src={img} alt=""/>
													<span class="status f-off"></span>
												</figure>
												<div class="friendz-meta">
													<a href="time-line.html">amy watson</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="472d263428292507202a262e2b6924282a">[email&#160;protected]</a></i>
												</div>
											</li>
											
										
										</ul>
										
									</div>
								</aside>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>	
	</section>
				
    </div>
   )
}
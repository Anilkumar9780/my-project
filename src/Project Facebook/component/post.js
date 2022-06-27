import React from "react";
import img from './6.webp';
import './css/style.css';
import './css/main.min.css';
import './css/color.css';
import './css/responsive.css';
import logo from './images/logo.png';
export default function Poat()
{
    return(
        <div>
  	<div class="col-lg-6">
								<div class="loadMore">
															
									<div class="central-meta item">
										<div class="user-post">
											<div class="friend-info">
												<figure>
													<img src={img} alt=""/>
												</figure>
												<div class="friend-name">
													<ins><a href="time-line.html" title="">Janice Griffith</a></ins>
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
																<button type="submit"></button>
															</form>	
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
							
								</div>
							</div>
							
          
          </div>
          )
      }
     
import React, { Component } from 'react';
import './App.css';
import NavBar from "./Navbar";
import Footer from "./Footer";
import ImgPath from "./ImgPath";

class Blog extends Component {
	render() {
		return (
			<div id="blog">			
				<NavBar />
				<div className="container">
					<div className="row">
						
						<div className="col-md-8 col-xs-12" id="blogs">
						
							<div className="blog-single">
								<div className="blog-title">What is Lorem Ipsum?</div>
								<div className="blog-img">
									<img src={ImgPath + '/images/food1.jpg'} className="img-responsive"/>
								</div>
								<div className="blog-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
									<p>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
								</div>
								<div className="blog-icons">
									<div className="icons-row">
										<span><i className="far fa-calendar-alt"></i><a href="#">Jan 10, 2018</a></span>
										<span><i className="fas fa-user"></i><a href="#">John Wu</a></span>
										<span><i className="fas fa-link"></i><a href="#">Permalink</a></span>
									</div>
									<div className="icons-row">
										<span><i className="fas fa-bookmark"></i><a href="#">Uncategorized</a></span>
										<span><i className="fas fa-tag"></i><a href="#">No Tags</a></span>
										<span></span>
									</div>
									<div className="icons-row">
										<span><i className="fas fa-comments"></i><a href="#">No comments</a></span>
										<span className="views">
											<span><i className="fas fa-eye"></i>188</span>
											<span><i className="fas fa-thumbs-up"></i>20</span>
											<span><i className="fas fa-thumbs-down"></i>6</span>
										</span>
										<span></span>
									</div>
								</div>
								<div className="blog-more read-more"><button>More</button></div>
							
							{/* .blog-single*/}
							</div>
							
							<div className="blog-single">
								<div className="blog-title">What is Lorem Ipsum?</div>
								<div className="blog-img">
									<img src={ImgPath + '/images/food1.jpg'} className="img-responsive"/>
								</div>
								<div className="blog-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
									<p>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
								</div>
								<div className="blog-icons">
									<div className="icons-row">
										<span><i className="far fa-calendar-alt"></i><a href="#">Jan 10, 2018</a></span>
										<span><i className="fas fa-user"></i><a href="#">John Wu</a></span>
										<span><i className="fas fa-link"></i><a href="#">Permalink</a></span>
									</div>
									<div className="icons-row">
										<span><i className="fas fa-bookmark"></i><a href="#">Uncategorized</a></span>
										<span><i className="fas fa-tag"></i><a href="#">No Tags</a></span>
										<span></span>
									</div>
									<div className="icons-row">
										<span><i className="fas fa-comments"></i><a href="#">No comments</a></span>
										<span className="views">
											<span><i className="fas fa-eye"></i>188</span>
											<span><i className="fas fa-thumbs-up"></i>20</span>
											<span><i className="fas fa-thumbs-down"></i>6</span>
										</span>
										<span></span>
									</div>
								</div>
								<div className="blog-more read-more"><button>More</button></div>
							
							{/* .blog-single*/}
							</div>
							
							<div className="blog-single">
								<div className="blog-title">What is Lorem Ipsum?</div>
								<div className="blog-img">
									<img src={ImgPath + '/images/food1.jpg'} className="img-responsive"/>
								</div>
								<div className="blog-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
									<p>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
								</div>
								<div className="blog-icons">
									<div className="icons-row">
										<span><i className="far fa-calendar-alt"></i><a href="#">Jan 10, 2018</a></span>
										<span><i className="fas fa-user"></i><a href="#">John Wu</a></span>
										<span><i className="fas fa-link"></i><a href="#">Permalink</a></span>
									</div>
									<div className="icons-row">
										<span><i className="fas fa-bookmark"></i><a href="#">Uncategorized</a></span>
										<span><i className="fas fa-tag"></i><a href="#">No Tags</a></span>
										<span></span>
									</div>
									<div className="icons-row">
										<span><i className="fas fa-comments"></i><a href="#">No comments</a></span>
										<span className="views">
											<span><i className="fas fa-eye"></i>188</span>
											<span><i className="fas fa-thumbs-up"></i>20</span>
											<span><i className="fas fa-thumbs-down"></i>6</span>
										</span>
										<span></span>
									</div>
								</div>
								<div className="blog-more read-more"><button>More</button></div>
							
							{/* .blog-single*/}
							</div>
							
						{/* #blogs col-md-8*/}
						</div>
						
						<div className="col-md-4 col-xs-12" id="sidebar">
								
							<div id="categories">
								<div className="sidebar-title">Categories</div>
								<ul>
									<li><a href="#">Lorem Ipsum</a></li>
									<li><a href="#">dummy text</a></li>
									<li><a href="#">typesetting</a></li>
									<li><a href="#">industry's standard</a></li>
									<li><a href="#">scrambled it to</a></li>
									<li><a href="#">specimen book</a></li>
								</ul>
							</div>
									
							<div id="recent-posts">
								<div className="sidebar-title">Recent Posts</div>
								
								<div className="recent-post">
									<div className="recent-img">
										<img src={ImgPath + '/images/food1.jpg'} />
									</div>
									<div className="recent-right">
										<div className="recent-date">20-9-2018</div>
										<div className="recent-title"><a href="#">I AM A TITLE</a></div>
										<div className="recent-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.<span><a href="#">[...]</a></span></div>
									</div>
								</div>

								<div className="recent-post">
									<div className="recent-img">
										<img src={ImgPath + '/images/food1.jpg'} />
									</div>
									<div className="recent-right">
										<div className="recent-date">20-9-2018</div>
										<div className="recent-title"><a href="#">I AM A TITLE</a></div>
										<div className="recent-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.<span><a href="#">[...]</a></span></div>
									</div>
								</div>
								
							</div>
							
						{/* #sidebar*/}
						</div>
						
					{/* .row */}
					</div>
				{/* .container*/}	
				</div>
				
				<Footer />
				
			{/* Blog */}
			</div>
		);
	}
}

export default Blog;

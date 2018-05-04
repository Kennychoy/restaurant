import React, { Component } from 'react';
import './App.css';
import NavBar from "./Navbar";
import Footer from "./Footer";
import ImgPath from "./ImgPath";

class Home extends Component {
	render() {
		return (
			<div id="home">
			
				<NavBar />
				
				<div id="home-primary">
					<div className="container">
						<div className="row">
						
							<div className="col-md-4 col-sm-4 col-xs-12">
								<div className="primary-wrapper">
									<div className="home-primary-img">
										<img src={ImgPath + '/images/food1.jpg'} className="img-responsive" />
									</div>
									<div className="home-primary-info">
										<div className="home-primary-info-icon">
											<i className="fab fa-apple"></i>
										</div>
										<div className="home-primary-info-description">Tradition<br />Cuisine</div>
										<div className="home-primary-info-more">
											<a href="#">more</a>
										</div>
									</div>							
								</div>
							</div>
							
							<div className="col-md-4 col-sm-4 col-xs-12">
								<div className="primary-wrapper">
									<div className="home-primary-info">
										<div className="home-primary-info-icon">
											<i className="fas fa-utensils"></i>
										</div>
										<div className="home-primary-info-description">Kid's & Vegan<br />Menu</div>
										<div className="home-primary-info-more">
											<a href="#">more</a>
										</div>
									</div>
									<div className="home-primary-img">
										<img src={ImgPath + '/images/food2.jpg'} className="img-responsive" />
									</div>	
								</div>
							</div>
								
							<div className="col-md-4 col-sm-4 col-xs-12">
								<div className="primary-wrapper">							
									<div className="home-primary-img">
										<img src={ImgPath + '/images/food3.jpg'} className="img-responsive" />
									</div>
									<div className="home-primary-info">
										<div className="home-primary-info-icon">
											<i className="far fa-lemon"></i>
										</div>
										<div className="home-primary-info-description">Happy Hours<br />&Offers</div>
										<div className="home-primary-info-more">
											<a href="#">more</a>
										</div>
									</div>	
								</div>								
							</div>
							
						{/* row */}	
						</div>
					{/* container */}
					</div>
				{/* home-primary */}
				</div>
				
				<div id="home-secondary">
					<div className="container">					
						<div className="row">
						
						<div className="col-md-4 col-xs-12">
							<div className="secondary-num">1.</div>
							<div className="secondary-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
							<div className="secondary-more"><button>more</button></div>
						</div>
						
						<div className="col-md-4 col-xs-12">
							<div className="secondary-num">2.</div>
							<div className="secondary-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
							<div className="secondary-more"><button>more</button></div>
						</div>
						
						<div className="col-md-4 col-xs-12">
							<div className="secondary-num">3.</div>
							<div className="secondary-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
							<div className="secondary-more read-more"><button>more</button></div>
						</div>
						
						{/* row */}
						</div>
					{/* container */}
					</div>
				{/* home-secondary*/}
				</div>
				
				<div id="home-tertiary">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-xs-12">
								<div className="tertiary-title">Welcome</div>
								<div className="tertiary-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
									<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
								</div>
								<div className="tertiary-more"><button>more</button></div>
							</div>
							<div className="col-md-6 col-xs-12">
								<div className="tertiary-title">Feel the Savor of Life</div>
								<div className="tertiary-text">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
								<div className="tertiary-more read-more"><button>more</button></div>
							</div>
						{/* .row*/}
						</div>
					{/* .container*/}
					</div>
				{/* home-tertiary*/}
				</div>
				
				<div id="home-fourth">
					<div className="container">
						<div className="fourth-title">
							Dishes for You to Try
						{/* .fourth-title*/}
						</div>
						<div className="row">	
						
							<div className="col-md-4 col-xs-12">
								<div className="fourth-img">
									<div className="fourth-img-wrapper">
										<img src={ImgPath + '/images/food1.jpg'} className="img-responsive" />
										<div className="fourth-img-layer">
											<i className="fas fa-search"></i>
										</div>
									</div>									
								</div>
								<div className="fourth-button">
									<button>+</button>
								</div>
							</div>
							
							<div className="col-md-4 col-xs-12">
								<div className="fourth-img">
									<div className="fourth-img-wrapper">
										<img src={ImgPath + '/images/food2.jpg'} className="img-responsive" />
										<div className="fourth-img-layer">
											<i className="fas fa-search"></i>
										</div>
									</div>	
								</div>
								<div className="fourth-button">
									<button>+</button>
								</div>
							</div>
							
							<div className="col-md-4 col-xs-12">
								<div className="fourth-img">
									<div className="./fourth-img-wrapper">
										<img src={ImgPath + '/images/food3.jpg'} className="img-responsive" />
										<div className="fourth-img-layer">
											<i className="fas fa-search"></i>
										</div>
									</div>	
								</div>
								<div className="fourth-button">
									<button>+</button>
								</div>
							</div>
							
						{/* .row*/}
						</div>
					{/* .container */}
					</div>
				{/* #home-fourth*/}
				</div>
				
				<div id="home-fifth">
					<div className="container">
						<div className="row">
						
							<div className="col-md-4 col-xs-12" id="testimonials">
								<div className="fifth-subtitle">Testimonials</div>
								<div className="fifth-wrapper">
									<div className="fifth-img-wrapper">
										<img src={ImgPath + '/images/food1.jpg'} className="img-responsive" />
									</div>									
									<div className="fifth-quotation">
										<div className="fifth-quotation-name">Some Body</div>
										<div className="fifth-quotation-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"</div>
									</div>
								</div>
								<div className="more-testimonials">
									<a href="#"><span>></span> more testimonials</a>
								</div>
							</div>
							
							<div className="col-md-4 col-xs-12" id="whatsnew">
								<div className="fifth-subtitle">What's new</div>
								<div className="fifth-events">
									<div className='fifth-date'>
										<div className="day">11</div>
										<div className="month">Jan</div>
									</div>
									<div className='fifth-details'>Nam consectetur at dui vitae euismod. Nullam malesuada diam a dictum iaculis. Vivamus vitae fermentum nisl. Curabitur tristique lobortis interdum. Duis consequat sapien vitae risus vulputate</div>
								</div>
								<div className="fifth-events">
									<div className='fifth-date'>
										<div className="day">11</div>
										<div className="month">Jan</div>
									</div>
									<div className='fifth-details'>Nam consectetur at dui vitae euismod. Nullam malesuada diam a dictum iaculis. Vivamus vitae fermentum nisl. Curabitur tristique lobortis interdum. Duis consequat sapien vitae risus vulputate</div>
								</div>
							</div>
							
							<div className="col-md-4 col-xs-12" id="openinghours">
								<div className="fifth-subtitle">Opening Hours</div>
								<div className="timing-wrapper">
									<div className="timing-details">Breakfast: <span>8AM - 11AM</span></div>
									<div className="timing-details">Grill Menu: <span>12AM - 12PM</span></div>
									<div className="timing-details">Live Music: <span>20PM - 00AM</span></div>
								</div>
							</div>
							
						{ /* .row */}
						</div>
					{/* .container*/}
					</div>
				{/* #home-fifth */}
				</div>
				
				<Footer />
				
			{/* home */}
			</div>
		);
	}
}

export default Home;

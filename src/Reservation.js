import React, { Component } from 'react';
import './App.css';
import NavBar from "./Navbar";
import Footer from "./Footer";
import Datepicker from "./Datepicker";
import ImgPath from "./ImgPath";

class Reservation extends Component {
	render() {
		return (
			<div id="reservation">			
				<NavBar />
				<div className="container">
					<div className="row">
					
						<div className="col-md-8 col-xs-12" id="reservation-text">
							<div className="reservation-title">Reserve Your Table</div>
							<img src={ImgPath + '/images/food1.jpg'}  className="img-responsive" />
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut enim non quam accumsan porta. Vivamus venenatis leo et sem fringilla, sed aliquet orci mollis. Pellentesque non orci velit. Vivamus non quam sed leo accumsan semper ac eget tellus. Ut consectetur elit eu lacus fringilla, accumsan gravida mauris feugiat.</p>
							<p>Duis eget fermentum magna. Donec sit amet fringilla nulla. Vivamus lacinia nulla ut dignissim mattis. Nullam porttitor eleifend finibus. Integer bibendum eros id risus feugiat pellentesque.</p>
							<h3>Suspendisse scelerisque ante at</h3>
							<p>Fusce nec dui magna. Nullam aliquam ex eget turpis pharetra, ac dignissim neque aliquet. Cras elit ipsum, consequat sed elementum a, dignissim eget metus. Quisque id nulla mollis, rutrum ante sed, auctor magna.</p>
							<p>In hac habitasse platea dictumst. Maecenas eu auctor mauris. Curabitur volutpat vitae neque eu accumsan. Nullam ac egestas tellus, tincidunt feugiat dui. Integer vulputate auctor ipsum, laoreet rhoncus turpis blandit a. Suspendisse non auctor turpis. Fusce accumsan, quam quis fermentum porta, sapien mi porttitor nulla</p>
							<p>Maecenas elementum quam a nulla luctus elementum. Maecenas at ullamcorper augue, a dapibus turpis. Nulla odio nunc, elementum id malesuada quis, sagittis vitae sapien. Pellentesque tristique vitae elit quis varius. In hac habitasse platea dictumst. Donec imperdiet ex urna, sed tincidunt ipsum tincidunt sed.</p>							
							
							<div className="reservation-more read-more"><button>more</button></div>
						{/* #reservation-text */}
						</div>
						
						<div className="col-md-4 col-xs-12" id="reservation-form">
							<div className="reservation-title">Our Hours</div>
							<div className="reservation-subtitle">We are open 7 days a week - 8 AM to 12 PM <br /> +1 101 889 9898</div>
							<form action="#">
								<div className="form-group">
									<input type="text" className="form-control" id="form-name" placeholder="Name:"/>
								</div>
								<div className="form-group">
									<input type="email" className="form-control" id="form-email" placeholder="Email:" />
								</div>
								
								<div className="form-group">
									<label className="form-inline form-checkinout">Check In:</label>
									<Datepicker />
								</div>
								
								<div className="form-group">
									<label className="form-checkinout">Check Out:</label>
									<Datepicker />
								</div>
								
								<div id="num-of-pp">
									<div className="form-group pp-counter">
										<label className="form-inline">Adults</label>
										<select type="select" className="form-inline" id="adults-select">
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
										</select>
									</div>
									
									<div className="form-group pp-counter">
										<label className="form-inline">Children</label>
										<select type="select" className="form-inline" id="children-select">
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
										</select>
									</div>
								</div>
								
								<textarea rows="4" cols="50" placeholder="Message"></textarea>
								
								<button type="reset" className="btn btn-default">Clear</button>
								
								<button type="submit" className="btn btn-default">Submit</button>					
								
							</form>
						</div>
						
					{/* .row */}
					</div>
				{/* .container*/}	
				</div>
				
				<Footer />				
			{/* #reservation */}
			</div>
		);
	}
}

export default Reservation;

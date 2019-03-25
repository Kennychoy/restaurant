import React, { Component } from 'react';
import './App.css';
import NavBar from "./Navbar";
import Footer from "./Footer";
import Datepicker from "./Datepicker";

class Contact extends Component {
	render() {
		return (
			<div id="contact">			
				<NavBar />
				<div className="container" id="contact-wrapper">
					<div className="row">
					
						<div className="col-md-9 col-xs-12" id="contact-map">
							<iframe frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?key={API_KEY}&q=Greenland+Denmark+center" allowFullScreen></iframe>
						</div>
						
						<div className="col-md-3 col-xs-12" id="contact-info">
							<div className="contact-details">
								<div className="contact-title">Address:</div>
								<div className="contact-description">#1, Main Road, Next City</div>
								<div className="contact-description">Greenland, Denmark</div>
							</div>
							<div className="contact-details">
								<div className="contact-title">Phones:</div>
								<div className="contact-description">+1 234 567 888</div>
								<div className="contact-description">+1 234 567 888</div>
							</div>
							<div className="contact-details">
								<div className="contact-title">Email:</div>
								<div className="contact-description">abc@def.com</div>
								<div className="contact-description"> </div>
							</div>
						</div>
						
						<div className="col-xs-9" id="contact-text">
							<p><span className="contact-bold">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus dignissim dapibus. In <span className="contact-bold">malesuada</span> suscipit risus, a maximus purus blandit non. Sed lacinia dapibus est quis tincidunt.</p>
							<p>Pellentesque consequat lacinia ligula, vel <span className="contact-bold">ultrices</span> libero dignissim vitae. Suspendisse interdum magna leo, ut ornare nulla volutpat vitae.</p>
							<p>Phasellus congue <span className="contact-bold">mollis</span> nisl, ac consequat orci. <span className="contact-bold">Vivamus</span> finibus odio ut lectus imperdiet, eu finibus odio ultrices. Sed sit amet mattis tortor. Pellentesque non metus tellus.</p>
						</div>
						
					{/* .row */}
					</div>
				{/* .container*/}	
				</div>
				
				<div className="container" id="contact-form">
					<div className="row">
						<div className="col-xs-12">
							<div className="form-title">Contact Form</div>
							<form action="#">
								<input type="text" id="contact-name" placeholder="Name:" />
								<input type="email" id="contact-email" placeholder="Email:" />
								<input type="text" id="contact-phone" placeholder="Phone:" />
								<textarea className="form-control" rows="8" cols="50" placeholder="Message:"></textarea>
								<div className="form-btns">
									<button type="submit">Send</button>
									<button type="reset">Clear</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				
				<Footer />				
			{/* #contact */}
			</div>
		);
	}
}

export default Contact;

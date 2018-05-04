import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="row">							
						<div className="col-md-4 col-xs-12" id="footer-name">
							Restaurant @ 2018 | <a href="#">Privacy Policy</a>
						</div>
						<div className="col-md-offset-5 col-md-3 col-xs-12" id="footer-icons">
							<a href="#" className="social-icons"><i className="fab fa-twitter"></i></a>
							<a href="#" className="social-icons"><i className="fab fa-google-plus-g"></i></a>
							<a href="#" className="social-icons"><i className="fab fa-facebook"></i></a>
							<a href="#" className="social-icons"><i className="fab fa-reddit"></i></a>
						</div>
					{/* .row */}
					</div>					
				{/* .container */}
				</div>
				
				<div id="go-top"><span>^</span></div>
					
			{/* footer*/}
			</footer>
		);
	}
}

export default Footer;

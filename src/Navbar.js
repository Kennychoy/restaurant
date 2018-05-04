import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
					
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span> 
						 </button>
						
						<a className="navbar-brand" href="#">Demo <span>Cafe</span></a>
							
					</div>
						
					<ul className="nav navbar-nav navbar-right collapse navbar-collapse" id="myNavbar">
						<li><NavLink to="/" exact><a>home</a></NavLink></li>
						<li><NavLink to="/menu" exact><a>menu</a></NavLink></li>
						<li><NavLink to="/reservation" exact><a>reservation</a></NavLink></li>
						<li><NavLink to="/blog" exact><a>blog</a></NavLink></li>
						<li><NavLink to="/contact" exact><a>contact</a></NavLink></li>
					</ul>
				</div>				
			</nav>
		);
	}
}

export default Navbar;

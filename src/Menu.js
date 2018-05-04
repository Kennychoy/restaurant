import React, { Component } from 'react';
import './App.css';
import NavBar from "./Navbar";
import Footer from "./Footer";
import Datepicker from "./Datepicker";
import ImgPath from "./ImgPath";

class Menu extends Component {
	
	constructor(props){		
		super(props);
		this.state = {
			menuObj: [
				{img: 'images/food1.jpg', 
				title: 'Lorem Ipsum is', 
				text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{img: 'images/food1.jpg', 
				title: 'Lorem Ipsum is', 
				text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{img: 'images/food3.jpg', 
				title: 'Lorem Ipsum is', 
				text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{img: 'images/food1.jpg', 
				title: 'Lorem Ipsum is', 
				text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{img: 'images/food1.jpg', 
				title: 'Lorem Ipsum is', 
				text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{img: 'images/food3.jpg', 
				title: 'Lorem Ipsum is', 
				text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{img: 'images/food1.jpg', 
				title: 'Lorem Ipsum is', 
				text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{img: 'images/food1.jpg', 
				title: 'Lorem Ipsum is', 
				text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{img: 'images/food3.jpg', 
				title: 'Lorem Ipsum is', 
				text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				}
			]
		}
	}	
	render() {
		return (
			<div id="menu">			
				<NavBar />
				<div className="container" id="menu-wrapper">
					<div className="row">
						{
							this.state.menuObj.map( (item, i) => {
								return (
									<div className="col-md-4 col-sm-6 col-xs-12 dish-wrapper" key={i}>
										<div className="dish-inner-wrapper">
											<div className="dish-img">
												<div className="dish-img-layer">
													<i className="fas fa-search"></i>
												</div>
												<img src={ImgPath + "/" + item.img} className="img-responsive"/>
											</div>
											
											<div className="dish-description">
												<div className="dish-name">{item.title}</div>
												<div className="dish-text">{item.text}</div>									
												<button>More</button>
											</div>
										</div>
									</div>
								)
							})
						}
						
					{/* .row */}
					</div>
				{/* .container*/}	
				</div>
				
				<Footer />				
			{/* #menu */}
			</div>
		);
	}
}

export default Menu;

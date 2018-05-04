import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Reservation from './Reservation';
import Blog from './Blog';
import Contact from './Contact';
import Menu from './Menu';
import { BrowserRouter as Router, Link, NavLink, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {	
	render() {
		return (
			<Router>
				<Switch>
				
					<Route path="/" exact component={Home} />
					<Route path="/menu" exact component={Menu} />
					<Route path="/reservation" exact component={Reservation} />
					<Route path="/blog" exact component={Blog} />					
					<Route path="/contact" exact component={Contact} />

					<div className="App">
						<Home />
					</div>
				</Switch>
			</Router>
		);
	}
}

export default App;

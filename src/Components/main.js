import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './header';
import MainContent from './mainContent';
import Categories from './categories';
import Locations from './locations';

export class Main extends Component{

	constructor(){
		super()
		
	}
	componentDidMount(){
		
	
		//pull in categories and locations from '/data' folder
	}
	render(){

		return(
			<div>
				<header>
					<Route path='/' render={()=><Header />} />
					<div id="result"></div>
 				</header>
				<content>
					<MainContent>
				
						<Route path="/Categories" render={()=><Categories />} />
						<Route path="/Locations" render={()=><Locations />} />
					</MainContent>
				</content>
				<footer>
					<Link to="/Categories">Categories</Link>
					<Link to="/Locations">Locations</Link>
				</footer>
			</div>
			
			)

	}

}
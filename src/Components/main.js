import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './header';
import MainContent from './mainContent';
import Categories from './categories';
import Locations from './locations';
import style from '../Style/app.css';

export class Main extends Component{

	constructor(){
		super()
		
	}
	componentDidMount(){

		//pull in categories and locations from '/data' folder
		document.getElementById('result').innerHTML= sessionStorage.getItem("Location1")
	
	}
	render(){

		return(
			<div className="wholeApp"> 
				<header>
					<Route path='/' render={()=><Header {...this.props}/>} />
					<div id="result"></div>
 				</header>
				<content className="content">
					<MainContent>
						<div id='result'></div>
								<Route path="/Categories" render={()=><Categories {...this.props}/>} />
								<Route path="/Locations" render={()=><Locations {...this.props}/>} />
					</MainContent>
				</content>
				<footer className="footer">
					<Link className="bottomIcon" onClick={()=>this.props.whichTopic('categories')} to="/Categories">Categories</Link>
					<Link className="bottomIcon" onClick={()=>this.props.whichTopic('locations')} to="/Locations">Locations</Link>
				</footer>
			</div>
			
			)

	}

}
import React, { Component } from 'react';
import { Locs } from '../data/locations';
import style from '../Style/locations.css';

class Locations extends Component{
	constructor(){
		super()

	}
	componentWillMount(){

}

	render(){

		return(
			<div className="locationsList">
					{Locs.map((loc,i)=>
						<div className="locationInfo" key={i}>
							<div>{loc.Name}</div>
							<div>{loc.Address}</div>
							<div>{loc.Coordinates}</div>
							<div>{loc.Category}</div>
						</div>
						)
				}
				<div>add location
					<input type="text" value={this.props.locationValue} onChange={(e)=>this.props.changeLocationValue(e.target.value)}/>
					<input type="text" value={this.props.locationValue} onChange={(e)=>this.props.changeLocationValue(e.target.value)}/>
					<input type="text" value={this.props.locationValue} onChange={(e)=>this.props.changeLocationValue(e.target.value)}/>
					<select>
					 {this.props.currentCats.map((cat, i)=>
								<option value ={cat} key={i} >
									{cat}
								</option>)}
					</select>
				</div>
			</div>
		    	)
			}
}
export default Locations
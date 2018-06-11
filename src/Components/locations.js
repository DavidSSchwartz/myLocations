import React, { Component } from 'react';
import { Locs } from '../data/locations';

class Locations extends Component{
	constructor(){
		super()

	}
	componentWillMount(){
}

	render(){

		return(
			<div>
					{Locs.map((loc,i)=>
						<div key={i}>
							<div>{loc.Name}</div>
							<div>{loc.Address}</div>
							<div>{loc.Coordinates}</div>
							<div>{loc.Category}</div>
						</div>
						)
				}
				<div>add location
					<input type="text" value={this.props.locationValue} onChange={(e)=>this.props.changeLocationValue(e.target.value)}/>
				</div>
			</div>
		    	)
			}
}
export default Locations
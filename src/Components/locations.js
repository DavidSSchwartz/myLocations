import React, { Component } from 'react';
import { Locs } from '../data/locations';
class Locations extends Component{
	constructor(){
		super()

	}
	componentWillMount(){
		//{JSON.stringify(Locs)}
}

	render(){

		return(
			<div>
					{Locs.map((loc,i)=>
						<div>
							<div>{loc.Name}</div>
							<div>{loc.Address}</div>
							<div>{loc.Coordinates}</div>
							<div>{loc.Category}</div>
						</div>
						)
				}
			</div>
		    	)
			}
}
export default Locations
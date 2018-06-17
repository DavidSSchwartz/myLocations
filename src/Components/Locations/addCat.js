import React, { Component } from 'react';
import { MapCats } from './mapCats';



export class AddCat extends Component{
	
	render(){
		return(
			<div>
				<input placeholder="name" type="text" value={this.props.locationName} onChange={(e)=>this.props.changeLocationName(e.target.value)}/>
				<input placeholder="address" type="text" value={this.props.locationAddress} onChange={(e)=>this.props.changeLocationAddress(e.target.value)}/>
				<input placeholder="latitude" type="text" value={this.props.locationCoordinates} onChange={(e)=>this.props.changeLocationCoordinates(e.target.value)}/>
				<input placeholder="longitude" type="text" value={this.props.locationCoordinates2} onChange={(e)=>this.props.changeLocationCoordinates2(e.target.value)}/>
				<select name="locCats" onChange={(e)=>this.props.changeLocationCategory(e.target.value)}>
					<option selected='selected'>category</option>
					<MapCats {...this.props}/>
				</select>
			</div>
					)
	}					
}
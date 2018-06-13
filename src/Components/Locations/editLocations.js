import React,{ Component} from 'react';
import { MapCats } from './mapCats';


export class EditLocations extends Component{
	constructor(){
		super()
	}
	handleNameChange=(e, loc)=>{
		this.props.editLocationName(e.target.value)
		this.props.catchOldLocVal(loc)
	}
	handleAddressChange=(e, loc)=>{
		this.props.editLocationAddress(e.target.value)
		this.props.catchOldLocVal(loc)

	}
	handleCoordinatesChange=(e, loc)=>{
		this.props.editLocationCoordinates(e.target.value)
		this.props.catchOldLocVal(loc)

	}
	handleCategoryChange=(e, loc)=>{
		this.props.editLocationCategory(e.target.value)
		this.props.catchOldLocVal(loc)

	}
	render(){
		const loc = this.props;
		console.log(loc.loc.Category)
		return(

				<div className="editDiv">
					<input placeholder="name" type="text" value={this.props.newLocationName} onChange={(e)=>this.handleNameChange(e, loc.loc)}/>
					<input placeholder="address" type="text" value={this.props.newLocationAddress} onChange={(e)=>this.handleAddressChange(e, loc.loc)}/>
					<input placeholder="coordinates" type="text" value={this.props.newLocationCoordinates} onChange={(e)=>this.handleCoordinatesChange(e, loc.loc)}/>
					<select name="locCats" onChange={(e)=>this.handleCategoryChange(e, loc.loc)}>
						<option selected='selected'>{loc.loc.Category}</option>
						<MapCats {...this.props} />
					</select> 
				</div>
				)
	}
}
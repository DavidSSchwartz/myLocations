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
	handleCoordinatesChange2=()=>{
		this.props.editLocationCoordinates2(e.target.value)
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
					<input className="theEditBox" placeholder="name" type="text" value={this.props.newLocationName} onChange={(e)=>this.handleNameChange(e, loc.loc)}/>
					<input className="theEditBox" placeholder="address" type="text" value={this.props.newLocationAddress} onChange={(e)=>this.handleAddressChange(e, loc.loc)}/>
					<input className="theEditBox" placeholder="latitue" type="text" value={this.props.newLocationCoordinates} onChange={(e)=>this.handleCoordinatesChange(e, loc.loc)}/>
					<input className="theEditBox" placeholder="longitude" type="text" value={this.props.newLocationCoordinates2} onChange={(e)=>this.handleCoordinatesChange2(e, loc.loc)}/>
					<select className="theEditBox" name="locCats" onChange={(e)=>this.handleCategoryChange(e, loc.loc)}>
						<option selected='selected'>{loc.loc.Category}</option>
						<MapCats {...this.props} />
					</select> 
				</div>
				)
	}
}
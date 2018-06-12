import React, { Component } from 'react';
import { Locs } from '../data/locations';
import style from '../Style/locations.css';

class Locations extends Component{
	constructor(){
		super()
		this.state={
			edit:false
		}
	}
	componentWillMount(){
		console.log(Locs)
		this.props.saveLocations(Locs)
	}
	componentWillReceiveProps(nextProps){

	 	// if(nextProps.newEditValue !== this.props.newEditValue){
	 	// 	if(nextProps.newEditValue == '' && this.props.editCatValue){
	 	// 		this.props.changeEditValue(this.props.editCatValue)
	 	// 	}
	 	// }
	 	if(nextProps.edited !== this.props.edited){
		 		if(nextProps.edited == -1){
		 		this.setState({
		 			edit:nextProps.edited
		 		})
			 }
	 	}
	}
	handleEditClick=(i, loc)=>{
			this.props.editComplete('')
		this.setState({
			edit:i
		})
		this.props.editLocationName(loc.Name)
		this.props.editLocationAddress(loc.Address)
		this.props.editLocationCoordinates(loc.Coordinates)
	//	this.props.editLocationCategory(loc.Category)
		this.props.catchOldLocVal(loc)

	}
	handleNameChange=()=>{

	}
	handleAddressChange=()=>{

	}
	handleCoordinatesChange=()=>{

	}
	handleCategoryChange=()=>{

	}
	render(){
		console.log(this.props)
		return(
			<div className="locationsList">
					{this.props.locations.map((loc,i)=>
						<div className="locationInfo" key={i}>
							<button onClick={()=>this.handleEditClick(i, loc)}>
								edit
							</button>
							{this.state.edit === i ? 
								<div>
									<input placeholder="name" type="text" value={this.props.newLocationName} onChange={(e)=>this.props.editLocationName(e.target.value)}/>
									<input placeholder="address" type="text" value={this.props.newLocationAddress} onChange={(e)=>this.props.editLocationAddress(e.target.value)}/>
									<input placeholder="coordinates" type="text" value={this.props.newLocationCoordinates} onChange={(e)=>this.props.editLocationCoordinates(e.target.value)}/>
									<select name="locCats" onChange={(e)=>this.props.editLocationCategory(e.target.value)}>
										<option selected='selected'>{loc.Category}</option>
										 {this.props.currentCats.map((cat, i)=>
													<option value ={cat} key={i} >
														{cat}
													</option>
										)}
									</select> 
								</div>
								:
								<div className="locationInfo">
									<div>{loc.Name}</div>
									<div>{loc.Address}</div>
									<div>{loc.Coordinates}</div>
									<div>{loc.Category}</div>
								</div>
							}
						</div>
						)}
				
				<div>add location
					<input placeholder="name" type="text" value={this.props.locationName} onChange={(e)=>this.props.changeLocationName(e.target.value)}/>
					<input placeholder="address" type="text" value={this.props.locationAddress} onChange={(e)=>this.props.changeLocationAddress(e.target.value)}/>
					<input placeholder="coordinates" type="text" value={this.props.locationCoordinates} onChange={(e)=>this.props.changeLocationCoordinates(e.target.value)}/>
					<select name="locCats" onChange={(e)=>this.props.changeLocationCategory(e.target.value)}>
					<option selected='selected'>category</option>
					 {this.props.currentCats.map((cat, i)=>
								<option value ={cat} key={i} >
									{cat}
								</option>)}
					</select>
				</div>
				<div>remove location
					<select name='removeLocation' onChange={(e)=>this.props.removeLoc(e.target.value)}>
					<option value="selected" selected="selected">remove</option>
					{this.props.locations.map((loc,i)=>
						<option value={loc.Name} key={i}>
							{loc.Name}
						</option>

						
						)}
					</select>
				</div>
			</div>
		    	)
			}
}
export default Locations
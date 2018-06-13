import React, { Component } from 'react';

export class ViewOnMap extends Component{
	constructor(props){
		super(props)
	}
	viewMapClick=(lat,long)=>{
		// if(this.propertiesBtn.innerHTML=="View properties"){
		// 	this.props.viewProperties('block')
		// }
		// else{
		// 	this.props.viewProperties('none')
		// }

		// {this.propertiesBtn.innerHTML=="Hide properties" ? this.propertiesBtn.innerHTML= "View properties" : this.propertiesBtn.innerHTML= "Hide properties"}
		console.log("rendereded")
		this.props.saveLat(lat)
		this.props.saveLong(long)
		this.props.showMap(true)
	}
	render(props){
		console.log(this)
		return(
			<button ref={ref => {this.viewMapBtn = ref }} className="viewMap" onClick={()=>this.viewMapClick(this.props.lat, this.props.long)}>View on Map</button>
			)
	}
}






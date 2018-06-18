import React, { Component } from 'react';

export class ViewOnMap extends Component{
	constructor(props){
		super(props)
	}
	viewMapClick=(lat,long)=>{
		if(this.viewMapBtn.innerHTML=="View on Map"){
			this.props.showMap(true)
		}
		else{
			this.props.showMap(false)
		}

		{this.viewMapBtn.innerHTML=="Hide map" ? this.viewMapBtn.innerHTML= "View on Map" : this.viewMapBtn.innerHTML= "Hide map"}
		this.props.saveLat(lat)
		this.props.saveLong(long)
	}
	render(props){
		return(
			<button ref={ref => {this.viewMapBtn = ref }} className="viewMap" onClick={()=>this.viewMapClick(this.props.lat, this.props.long)}>View on Map</button>
			)
	}
}






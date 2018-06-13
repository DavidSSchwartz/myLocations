import React, { Component } from 'react';

export class ViewProperties extends Component{
	constructor(){
		super()
	}
	propertiesClick=()=>{
		if(this.propertiesBtn.innerHTML=="View properties"){
			this.props.viewProperties('block')
		}
		else{
			this.props.viewProperties('none')
		}

		{this.propertiesBtn.innerHTML=="Hide properties" ? this.propertiesBtn.innerHTML= "View properties" : this.propertiesBtn.innerHTML= "Hide properties"}

	}
	render(){
		return(
			<button ref={ref => {this.propertiesBtn = ref }} className="viewProperties" onClick={()=>this.propertiesClick()}>View properties</button>
			)
	}
}
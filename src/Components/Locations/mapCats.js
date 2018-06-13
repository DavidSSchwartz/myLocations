import React, { Component } from 'react';

export class MapCats extends Component{
		constructor(){
			super()
		}

		render(){
			return(
			//	<option selected='selected'>category</option>
					 this.props.currentCats.map((cat, i)=>
								<option value ={cat} key={i} >
									{cat}
								</option>)
					 )
		}
	}
import React, { Component } from 'react'
import { result } from '../data/categories';

class Categories extends Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div>
					{result.map((res, i)=>
						<div key={i}>
							{res}
						</div>)}
			</div>
		    	)
			}
}
export default Categories
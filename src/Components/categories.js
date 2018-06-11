import React, { Component } from 'react'
import { cats } from '../data/categories';

class Categories extends Component{
	constructor(){
		super()
	}
	componentWillMount(){
		this.props.saveCats(cats)

	}
	// componentWillReceiveProps(nextProps){

	// 	if(nextProps.currentCats !== this.props.currentCats){
	// 	}

	// }
	render(){
		console.log(this.props.currentCats)
		return(
			<div>
					{this.props.currentCats.map((cat, i)=>
						<div key={i}>
							{cat}
						</div>)}
					<div>
						{this.props.categoryValue}
						</div>

					<div>add category
						<input type='text' value={this.props.categoryValue} onChange={(e)=>this.props.changeCategoryValue(e.target.value)}/>
						
					</div>
			</div>
		    	)
			}
}
export default Categories
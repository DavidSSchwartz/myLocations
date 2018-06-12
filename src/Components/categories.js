import React, { Component } from 'react'
import { cats } from '../data/categories';

class Categories extends Component{
	constructor(){
		super()
		this.state={
			edit:false
		}
	}
	componentWillMount(){
		this.props.saveCats(cats)
		this.props.editChosenCat(false)
	}
	 componentWillReceiveProps(nextProps){

	 	// if(nextProps.newEditValue !== this.props.newEditValue){
	 	// 	if(nextProps.newEditValue == '' && this.props.editCatValue){
	 	// 		this.props.changeEditValue(this.props.editCatValue)
	 	// 	}
	 	// }

	}
	handleEditClick=(i, cat)=>{
		this.setState({edit:i})
		this.props.createNewValue(cat)

	}

	// handleEditClick=(e)=>{
	// 	this.props.editClicked(e)
	// 	this.props.editChosenCat(true)
	// 	this.props.changeEditValue('')
	// }
	// handleChange=(e)=>{
	// 	console.log(e)
	// 	this.props.changeEditValue(e)
	// }
	handleChange=()=>{}
	render(){
		console.log(this.props.currentCats)
		return(
			<div>
					{this.props.currentCats.map((cat, i)=>
						
						<div key={i}>
							<button onClick={()=>this.handleEditClick(i, cat)}>
								edit
							</button>
							{this.state.edit === i ? <input type="text" value={this.props.newValue} onChange={(e)=>this.props.createNewValue(e.target.value)}/>:
								<div>	
								{cat}
							</div>}
						</div>
						)}
						
					<div>add category
						<input type='text' value={this.props.categoryValue} onChange={(e)=>this.props.changeCategoryValue(e.target.value)}/>
						
					</div>
					<div>remove category
						<select name="categories" onChange={(e)=>this.props.removeCat(e.target.value)}>
						    {this.props.currentCats.map((cat, i)=>
								<option value ={cat} key={i} >
									{cat}
								</option>)}
						  </select>
					</div>
					<div> edit category
						<select name="categories" onChange={(e)=>this.handleEditClick(e.target.value)}>
						 
						    {this.props.currentCats.map((cat, i)=>
								<option value ={cat} key={i} >
									{cat}
								</option>)}

						  </select>
						  {this.props.editCat && <input type='text' value={this.props.newEditValue || this.props.editCatValue} onChange={(e)=>this.handleChange(e.target.value)} />}
					</div>

			</div>
		    	)
			}
}
export default Categories
import React, { Component } from 'react';
import style from '../Style/categories.css';

class Categories extends Component{
	constructor(){
		super()
		this.state={
			edit:false
		}
	}
	componentWillMount(){
		
		this.props.editChosenCat(false)
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
	handleEditClick=(i, cat)=>{
		console.log(i)
		this.props.editComplete('')
		this.setState({
			edit:i
		})
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
	handleChange=(e, cat)=>{
		console.log('firing')
		this.props.createNewValue(e)
		this.props.catchOldValue(cat)
	}
	render(){
		console.log(this.props.edited)
		return(
			<div className="categoriesMainDiv">
					<div>
					{this.props.currentCats.map((cat, i)=>
						
						<div className="listCats"key={i}>
							<button className="editButton" onClick={()=>this.handleEditClick(i, cat)}>
								<i className="fas fa-edit editedit"></i>
							</button>
							{this.state.edit === i ? 
								<input className="theEditBox" type="text" value={this.props.newValueCats} onChange={(e)=>this.handleChange(e.target.value, cat)}/>
								:
								<div className="theCategory">	
									{cat}
								</div>}
						</div>
						)}
					</div>
					<div className="addAndRemove">
						<div>
							<input className="addCat" placeholder="Add category" type='text' value={this.props.categoryValue} onChange={(e)=>this.props.changeCategoryValue(e.target.value)}/>
							
						</div>
						<div>
							<select className="removeCat" name="categories" onChange={(e)=>this.props.removeCat(e.target.value)}>
							    <option selected='selected'>Remove category</option>
							    {this.props.currentCats.map((cat, i)=>
									<option value ={cat} key={i} >
										{cat}
									</option>)}
							  </select>
						</div>
					</div>
					{/*<div> edit category
						<select name="categories" onChange={(e)=>this.handleEditClick(e.target.value)}>
						 
						    {this.props.currentCats.map((cat, i)=>
								<option value ={cat} key={i} >
									{cat}
								</option>)}

						  </select>
						  {this.props.editCat && <input type='text' value={this.props.newEditValue || this.props.editCatValue} onChange={(e)=>this.handleChange(e.target.value)} />}
					</div>*/}

			</div>
		    	)
			}
}
export default Categories
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
		this.props.adding(false)
		this.props.removing(false)
	}
	 componentWillReceiveProps(nextProps){

	
	 	if(nextProps.edited !== this.props.edited){
		 		if(nextProps.edited == -1){
		 		this.setState({
		 			edit:nextProps.edited
		 		})
			 }
	 	}
	}
	handleEditClick=(i, cat)=>{
		this.props.editComplete('')
		this.setState({
			edit:i
		})
		this.props.createNewValue(cat)

	}


	handleChange=(e, cat)=>{
		this.props.createNewValue(e)
		this.props.catchOldValue(cat)
	}
	addClick=()=>{
		this.props.adding(true)
		this.props.addingBtn(false)
		this.props.changeCategoryValue('')
	}
	removeClick=()=>{
		this.props.removing(true)
		this.props.removingBtn(false)

	}
	render(){
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
						<div className="propertyDiv">
							{this.props.addBtn && <button className="sortBtn" onClick={()=>this.addClick()}><i className="fas fa-plus-circle plus-circle"></i><span className='tooltip tt2'>add category</span></button>}

							{this.props.toAdd &&
								<input className="addCat" placeholder="Add category" type='text' value={this.props.categoryValue} onChange={(e)=>this.props.changeCategoryValue(e.target.value)}/>
							}
							
						</div>
						<div className="propertyDiv">

							{this.props.removeBtn && <button className="sortBtn" onClick={()=>this.removeClick()}><i className="fas fa-minus-circle"></i> <span className='tooltip tt2'>remove category</span> </button>}

							{this.props.toRemove &&
							<select className="removeCat" name="categories" onChange={(e)=>this.props.removeCat(e.target.value)}>
							    <option selected='selected'>Remove category</option>
							    {this.props.currentCats.map((cat, i)=>
									<option value ={cat} key={i} >
										{cat}
									</option>)}
							  </select>
							}
						</div>
					</div>
								
					
			</div>
		    	)
			}
}
export default Categories
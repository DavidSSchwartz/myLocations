import React, { Component } from 'react'

class Header extends Component{
	constructor(){
		super()
	}

	handleAddClick=()=>{
		if (this.props.categoryValue !== ''){
			
			let catAdded= this.props.currentCats.concat(this.props.categoryValue)
			
			this.props.saveCats(catAdded)
			
			console.log(this.props.currentCats)
			
		}
		//this.props.saveCats(this.props.currentCats + this.props.categoryValue)
	}
	handleRemoveClick=()=>{

		let handleRemoval = this.props.removedCat


		let newArray = this.props.currentCats.filter(cat => cat !== handleRemoval)

			this.props.saveCats(newArray)
			
	}
	handleEditClick=()=>{
		let current = this.props.currentCats.indexOf(this.props.editCatValue)
		if(current > -1){
				this.props.currentCats.splice(current,1, this.props.newEditValue)

				let editedArray=this.props.currentCats
				this.props.saveCats(editedArray)
		}
		
		
		
			
		
	}
	render(){
		return(
			<div>
				<header>
					MyLocations
				</header>
				<button onClick={()=>this.handleAddClick()}>
					Add
				</button>
				<button onClick={()=>this.handleRemoveClick()}>
				remove
				</button>
				<button onClick={()=>this.handleEditClick()}>
				edit
				</button>
			</div>
		    	)
			}
}
export default Header
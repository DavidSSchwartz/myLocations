import React, { Component } from 'react'
import { cats } from '../data/categories';

class Header extends Component{
	constructor(){
		super()
	}
	componentWillMount(){
		console.log('mounted')
		this.props.saveCats(cats)

	}
	handleAddClick=()=>{
		if (this.props.categoryValue !== ''){
			
			let catAdded= this.props.currentCats.concat(this.props.categoryValue)
			
			this.props.saveCats(catAdded)
			
			console.log(this.props.currentCats)
			
		}
		if (this.props.locationName !== '' && this.props.locationAddress !== '' && this.props.locationCoordinates !== '' && (this.props.locationCategory !== '' && this.props.locationCategory !== 'category')){
			
			let locAdded= this.props.locations.concat([{Name:this.props.locationName, Address:this.props.locationAddress, Coordinates:this.props.locationCoordinates,Category:this.props.locationCategory}])
			
			this.props.saveLocations(locAdded)
			
			console.log(this.props.currentCats)
			this.props.addIncomplete(false)
		}
		else{
			this.props.addIncomplete(true)
		}


	}
	handleRemoveClick=()=>{
		//Category Removal
		let handleCatRemoval = this.props.removedCat

		let newCatArray = this.props.currentCats.filter(cat => cat !== handleCatRemoval)

		this.props.saveCats(newCatArray)

		//Location Removal
		let handleLocRemoval = this.props.removedLocation
		let newLocArray = this.props.locations.filter(loc => loc.Name !== handleLocRemoval)
		this.props.saveLocations(newLocArray)

			
	}
	handleEditClick=()=>{
		// let current = this.props.currentCats.indexOf(this.props.editCatValue)
		// if(current > -1){
		// 		this.props.currentCats.splice(current,1, this.props.newEditValue)

		// 		let editedArray=this.props.currentCats
		// 		this.props.saveCats(editedArray)
 	// 	let current = this.props.currentCats.indexOf(this.props.editCatValue)
		// let handleEdit= this.props.editCatValue
		// let editedArray = this.props.currentCats.filter(cat => cat !== handleEdit)
		// editedArray.splice(current,0,this.props.newEditValue)

		// {this.props.newEditValue ? this.props.saveCats(editedArray) : ''}
		
		// this.props.editClicked(this.props.newEditValue)
			
		if(this.props.topic === 'categories'){
			let currentCat = this.props.currentCats.indexOf(this.props.oldValueCats)
				
			this.props.currentCats.splice(currentCat,1, this.props.newValueCats)

			let editedCatArray=this.props.currentCats
			this.props.saveCats(editedCatArray)
			this.props.editComplete(-1)
		}


		let currentLoc = this.props.locations.indexOf(this.props.oldLocationValue)
			if(currentLoc > -1){
			this.props.locations.splice(currentLoc,1, {Name:this.props.newLocationName,Address:this.props.newLocationAddress, Coordinates:this.props.newLocationCoordinates, Category:this.props.newLocationCategory})

			let editedLocArray=this.props.locations
			this.props.saveLocations(editedLocArray)
			this.props.editComplete(-1)
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
import React, { Component } from 'react'
import { cats } from '../data/categories';
import style from '../Style/header.css'

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
			
			let newLocation = [{Name:this.props.locationName, Address:this.props.locationAddress, Coordinates:{lat:this.props.locationCoordinates,long:this.props.locationCoordinates2},Category:this.props.locationCategory}]
			let locAdded= this.props.locations.concat(newLocation)
			
			this.props.saveLocations(locAdded)
			//this.props.saveNewLocation(newLocation)
			console.log(this.props.currentCats)
			this.props.addIncomplete(false)
			this.props.adding(false)
			//reset the add inputs
			this.props.changeLocationName('')
			this.props.changeLocationAddress('')
			this.props.changeLocationCoordinates('')
			this.props.changeLocationCoordinates2('')
			this.props.changeLocationCategory('')

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
		console.log(this.props.oldLocationValue)
			if(currentLoc > -1){
			this.props.locations.splice(currentLoc,1, {Name:this.props.newLocationName,Address:this.props.newLocationAddress, Coordinates:{lat:this.props.newLocationCoordinates, long:this.props.newLocationCoordinates2}, Category:this.props.newLocationCategory})

			let editedLocArray=this.props.locations
			this.props.saveLocations(editedLocArray)
			this.props.editComplete(-1)
		}
	

	
	}
	render(){
		return(
			<div className="header">
				<header className="title">
					MyLocations
				</header>
				<div className="topBtnsDiv">
					<button className="topBtn" onClick={()=>this.handleAddClick()}>
						Add
					</button>
					<button className="topBtn" onClick={()=>this.handleRemoveClick()}>
						Remove
					</button>
					<button className="topBtn" onClick={()=>this.handleEditClick()}>
						Edit
					</button>
				</div>
			</div>
		    	)
			}
}
export default Header
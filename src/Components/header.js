import React, { Component } from 'react'
import { cats } from '../data/categories';
import style from '../Style/header.css'

class Header extends Component{
	constructor(){
		super()
	}
	componentWillMount(){
		this.props.saveCats(cats)

	}
	handleAddClick=()=>{
		if (this.props.categoryValue !== ''){
			
			let catAdded= this.props.currentCats.concat(this.props.categoryValue)
			
			this.props.saveCats(catAdded)
			//hide adding inputs
			this.props.adding(false)
			//unhide adding button
			this.props.addingBtn(true)
			

			
		}
		if (this.props.locationName !== '' && this.props.locationAddress !== '' && this.props.locationCoordinates !== '' && (this.props.locationCategory !== '' && this.props.locationCategory !== 'category')){
			
			let newLocation = [{Name:this.props.locationName, Address:this.props.locationAddress, Coordinates:{lat:this.props.locationCoordinates,long:this.props.locationCoordinates2},Category:this.props.locationCategory}]
			let locAdded= this.props.locations.concat(newLocation)
			
			this.props.saveLocations(locAdded)
			//this.props.saveNewLocation(newLocation)
			this.props.addIncomplete(false)
			//hide adding inputs
			this.props.adding(false)
			//unhide adding button
			this.props.addingBtn(true)

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
		//hide remove select bar
		this.props.removing(false)
		//unhide remove button
		this.props.removingBtn(true)

			
	}
	handleEditClick=()=>{
		
			
		if(this.props.topic === 'categories'){
			let currentCat = this.props.currentCats.indexOf(this.props.oldValueCats)
				
			this.props.currentCats.splice(currentCat,1, this.props.newValueCats)

			let editedCatArray=this.props.currentCats
			this.props.saveCats(editedCatArray)
			this.props.editComplete(-1)
		}


		let currentLoc = this.props.locations.indexOf(this.props.oldLocationValue)
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
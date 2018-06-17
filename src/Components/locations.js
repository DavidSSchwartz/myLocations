import React, { Component } from 'react';
import { Locs } from '../data/locations';
import style from '../Style/locations.css';
import { EditLocations } from './Locations/editLocations';
import { MapCats } from './Locations/mapCats';
import GoogleMapsContainer   from './Locations/Map';
import { ViewProperties } from './Locations/viewProperties';
import { ViewOnMap } from './Locations/viewOnMap';
import '../Style/categories.css'
import { AddCat } from './Locations/addCat';

class Locations extends Component{
	constructor(){
		super()
		this.state={
			edit:false,
			state:'',
			locDisplay:'block',
			locationCategory:'',
			nameClicked:false,
			locName:'',
			locAddr:'',
			locCoord:Number,
			locCat:''
		}
	}
	componentWillMount(){
		console.log(Locs)
		this.props.saveLocations(Locs)
		this.props.addIncomplete(false)
		this.props.categorySorting(false)
		this.props.chooseACatLoc(false)
		this.props.viewProperties('none')
		this.props.adding(false)
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
	handleEditClick=(i, loc)=>{
			this.props.editComplete('')
		this.setState({
			edit:i
		})
		this.props.editLocationName(loc.Name)
		this.props.editLocationAddress(loc.Address)
		this.props.editLocationCoordinates(loc.Coordinates.lat)
		this.props.editLocationCoordinates2(loc.Coordinates.long)

	//	this.props.editLocationCategory(loc.Category)
				console.log(this.state.edit)

	}
	
	handleAlphebatizeClick=()=>{
		

		if(this.sort.innerHTML == "unsort" ){
			const randomOrder= this.props.locations.sort(function(a, b){return 0.5 - Math.random()});
			this.props.saveLocations(randomOrder)
			//to make it rerender automatically
			this.props.editComplete('')

		}
		else{	
		 let ABCorder = (this.props.locations.sort(function(a, b){
						    var x = a.Name.toLowerCase();
						    var y = b.Name.toLowerCase();
						    if (x < y) {return -1;}
						    if (x > y) {return 1;}
						    return 0;
						}))

			this.props.saveLocations(ABCorder)
			//to make it rerender automatically
			this.props.editComplete(' ')

		}
		//change text on tooltip
		{this.sort.innerHTML=="unsort" ? this.sort.innerHTML= "sort alphabetically" : this.sort.innerHTML= "unsort"}
		//change background-color on button
		{this.sort.innerHTML=="unsort" ? this.sortbtn.style.backgroundColor= "#e0b024" : this.sortbtn.style.backgroundColor= "#fdd247"}

	}

	handleCategorySort=()=>{
	
	
		if(this.catSort.innerHTML == "sort by category" ){

			const orderedCats=(this.props.currentCats.map((cat,i)=>
											this.props.locations.map((locs,ii)=>
												cat === locs.Category ?    									
														<div className="locationName orderedLoc" key={i}>  {locs.Name}<span className="orderedCat">{locs.Category}</span> </div>
													:null
												)).sort())
			//maybe try to incoorporate edit

			this.setState({
				orderedCats:orderedCats
			})

			this.props.categorySorting(true)
			//this.props.saveLocations(this.state.orderedCats)
			this.setState({
				locDisplay:'none'
			})
				console.log(this.state.orderedCats)
}	

		else{
			this.props.categorySorting(false)
			this.setState({
				locDisplay:'block'
			})

		}

		//change text on tooltip
		{this.catSort.innerHTML=="unsort" ? this.catSort.innerHTML= "sort by category" : this.catSort.innerHTML= "unsort"}
		//change background-color on button
		{this.catSort.innerHTML=="unsort" ? this.catSortBtn.style.backgroundColor= "#e0b024" : this.catSortBtn.style.backgroundColor= "#fdd247"}

	
	}
	handleChooseCatLoc=(e)=>{
		 const locByCat=(this.props.locations.map((loci, i)=>
						e === loci.Category ? <div key={i}>{loci.Name}</div>:console.log("loc.Name")
					))
		
		this.setState({
				locationCategory:locByCat
			})
		this.setState({
				locDisplay:'none'
			})
		this.props.chooseACatLoc(true)
		console.log(this.state.locationCategory)

	}
	handleButton=()=>{
			this.props.chooseACatLoc(false)
			this.setState({
				locDisplay:'block'
			})
		}
	handleNameClick=(locN, locA, locCo, locCa)=>{
			this.setState({
				nameClicked:true,
				locName:locN,
				locAddr:locA,
				locLat:locCo.lat,
				locLong:locCo.long,
				locCat:locCa,
				locDisplay:'none'
			})


	}
	handleBackClick=()=>{
		this.setState({
				nameClicked:false,
				locDisplay:'block'
			})
	}
	addClick=()=>{
		
		this.props.adding(true)

	}
	render(){
		console.log(this.props.toAdd)
		return(
			<div  className="allLocationInfo">
					<div className="locationsList">
					{this.props.locations.map((loc,i)=>
					
						<div style={{display:this.state.locDisplay}} className="locationInfo" key={i}>
							<button className="editButton" onClick={()=>this.handleEditClick(i, loc)}>
									<i className="fas fa-edit editedit"></i>
							</button>
							{this.state.edit === i ? 

								<EditLocations loc={loc} {...this.props}/>

								:

								<div  ref={ref => {this.locationsOriginal = ref }}className="">
									<div className='locationName' onClick={()=> this.handleNameClick(loc.Name, loc.Address, loc.Coordinates, loc.Category) }>{loc.Name}</div>
								</div>
								
							
							}

	
						</div>
					
						)}
					{this.state.nameClicked && 
							<div> 
								<div className="locationName">{this.state.locName} </div>
								<div style={{display:this.props.properties}}>
									<div className='locationDetail'>{this.state.locAddr} </div>
									<div className='locationDetail'>{this.state.locLat + ", " + this.state.locLong} </div>
									<div className='locationDetail'>{this.state.locCat}  </div>
								</div>
								
								<ViewProperties {...this.props}/>
								
								<ViewOnMap lat={this.state.locLat} long={this.state.locLong} {...this.props} />
								
								<button onClick={()=>this.handleBackClick()}>
								back to locations
								</button>

							</div>
						}
						{this.props.categorySorted && this.state.orderedCats}
						{this.props.choseACatLoc &&  this.state.locationCategory}
					</div>

					
					<div className="allOtherFeatures">
						
					<div className="fullPropertyDiv">
						<i className="fas fa-plus-circle plus-circle" onClick={()=>this.addClick()}> <span className='tooltip'>add category</span>  </i>
						{this.props.toAdd &&

							<AddCat {...this.props} />
						
						}
						{this.props.alertAddIncomplete &&
						 <div className="warning">Please complete all fields </div>
						}
					</div>
					
					<div className="fullPropertyDiv">
						<select name='removeLocation' onChange={(e)=>this.props.removeLoc(e.target.value)}>
						<option value="selected" selected="selected">Remove location</option>
						{this.props.locations.map((loc,i)=>
							<option value={loc.Name} key={i}>
								{loc.Name}
							</option>


							
							)}
						</select>
					</div>
					<div className="fullPropertyDiv">
						<button className="sortBtn" ref={ref => {this.sortbtn = ref }} onClick={()=>this.handleAlphebatizeClick()}><i className="fas fa-sort-alpha-down"></i><span ref={ref => {this.sort = ref }} className="tooltip tt2">sort alphabetically</span></button>
					</div>
					<div className="fullPropertyDiv">
						<button className="sortBtn"ref={ref => {this.catSortBtn = ref }} onClick={()=>this.handleCategorySort()}><i className="fas fa-clipboard-list"></i><span ref={ref => {this.catSort = ref }} className="tooltip tt2">sort by category</span></button>
					</div>
					<div className="fullPropertyDiv"> view locations of specific category
						<select name="chooseCat" onChange={(e)=> this.handleChooseCatLoc(e.target.value)}>
							<option selected="selected">category</option>
							<MapCats {...this.props} />
						</select>
						<button onClick={()=>this.handleButton()}>undo</button>

					</div>
					<div>
					{this.props.showingMap && <GoogleMapsContainer/> }
					</div>
				</div>
		    </div>
		    	)
			}
}
export default Locations
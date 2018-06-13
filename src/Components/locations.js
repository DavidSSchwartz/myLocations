import React, { Component } from 'react';
import { Locs } from '../data/locations';
import style from '../Style/locations.css';
import { EditLocations } from './Locations/editLocations';
import { MapCats } from './Locations/mapCats';
import { MyMapComponent }  from './Locations/Map';
import { ViewProperties } from './Locations/viewProperties';
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
		this.props.editLocationCoordinates(loc.Coordinates)
	//	this.props.editLocationCategory(loc.Category)

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
		{this.sort.innerHTML=="unsort" ? this.sort.innerHTML= "sort alphabetically" : this.sort.innerHTML= "unsort"}


	}

	handleCategorySort=()=>{
	
	
		if(this.catSort.innerHTML == "sort by category" ){

			const orderedCats=(this.props.currentCats.map((cat,i)=>
											this.props.locations.map((locs,i)=>
												cat === locs.Category ?<div key={i}>{locs.Category} {locs.Name}</div>:console.log(i)
										)).sort())
			this.setState({
				orderedCats:orderedCats
			})
			this.props.categorySorting(true)
			this.setState({
				locDisplay:'none'
			})}	
		else{
			this.props.categorySorting(false)
			this.setState({
				locDisplay:'block'
			})
		}


		{this.catSort.innerHTML=="unsort" ? this.catSort.innerHTML= "sort by category" : this.catSort.innerHTML= "unsort"}
	
	}
	handleChooseCatLoc=(e)=>{
		this.locByCat=(this.props.locations.map((loci, i)=>
						e === loci.Category ? <div key={i}>{loci.Name}</div>:console.log("loc.Name")
					))
		
		this.setState({
				locationCategory:this.locByCat
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
				locCoord:locCo,
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
	

	render(){
		console.log(this.props.locations)
		return(
			<div  className="locationsList">
					{this.props.locations.map((loc,i)=>
						<div style={{display:this.state.locDisplay}} className="locationInfo" key={i}>
							<button onClick={()=>this.handleEditClick(i, loc)}>
								edit
							</button>
							{this.state.edit === i ? 

								<EditLocations loc={loc} {...this.props}/>

								:

								<div  ref={ref => {this.locationsOriginal = ref }}className="locationInfo">
									<div className='locationName' onClick={()=> this.handleNameClick(loc.Name, loc.Address, loc.Coordinates, loc.Category) }>{loc.Name}</div>
									<div className='locationDetail'>{loc.Address}</div>
									<div className='locationDetail'>{loc.Coordinates}</div>
									<div className='locationDetail'>{loc.Category}</div>
								</div>
								
							
							}

	
					</div>
						)}
					{this.state.nameClicked && 
						<div> 
							{this.state.locName} 
							<div style={{display:this.props.properties}}>
								<div className='locationDetail'>{this.state.locAddr} </div>
								<div className='locationDetail'>{this.state.locCoord} </div>
								<div className='locationDetail'>{this.state.locCat}  </div>
							</div>
							<ViewProperties {...this.props}/>
							<button className="showOption" >
								View on Map
							</button> 
							<button onClick={()=>this.handleBackClick()}>
							back to locations
							</button>
						</div>
					}
					{this.props.categorySorted && this.state.orderedCats}
					{this.props.choseACatLoc &&  this.state.locationCategory}
				
				<div>add location
					<input placeholder="name" type="text" value={this.props.locationName} onChange={(e)=>this.props.changeLocationName(e.target.value)}/>
					<input placeholder="address" type="text" value={this.props.locationAddress} onChange={(e)=>this.props.changeLocationAddress(e.target.value)}/>
					<input placeholder="coordinates" type="text" value={this.props.locationCoordinates} onChange={(e)=>this.props.changeLocationCoordinates(e.target.value)}/>
					<select name="locCats" onChange={(e)=>this.props.changeLocationCategory(e.target.value)}>
						<option selected='selected'>category</option>
						<MapCats {...this.props}/>
					</select>
				</div>
				{this.props.alertAddIncomplete && <div>Please complete all fields </div>}
				<div>remove location
					<select name='removeLocation' onChange={(e)=>this.props.removeLoc(e.target.value)}>
					<option value="selected" selected="selected">remove</option>
					{this.props.locations.map((loc,i)=>
						<option value={loc.Name} key={i}>
							{loc.Name}
						</option>

						
						)}
					</select>
				</div>
				<div>
					<button ref={ref => {this.sort = ref }} onClick={()=>this.handleAlphebatizeClick()}>sort alphabetically</button>
				</div>
				<div>
					<button ref={ref => {this.catSort = ref }} onClick={()=>this.handleCategorySort()}>sort by category</button>
				</div>
				<div> view locations of specific category
					<select name="chooseCat" onChange={(e)=> this.handleChooseCatLoc(e.target.value)}>
						<option selected="selected">category</option>
						<MapCats {...this.props} />
					</select>
					<button onClick={()=>this.handleButton()}>undo</button>

				</div>
				<div>
				<MyMapComponent
				  isMarkerShown
				  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
				  loadingElement={<div style={{ height: `100%` }} />}
				  containerElement={<div style={{ height: `400px` }} />}
				  mapElement={<div style={{ height: `100%` }} />}
				/>
				</div>
			</div>
		    	)
			}
}
export default Locations
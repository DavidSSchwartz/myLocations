import React, { Component } from 'react';
import { Locs } from '../data/locations';
import style from '../Style/locations.css';

class Locations extends Component{
	constructor(){
		super()
		this.state={
			edit:false,
			state:'',
			locDisplay:'block'
		}
	}
	componentWillMount(){
		console.log(Locs)
		this.props.saveLocations(Locs)
		this.props.addIncomplete(false)
		this.props.categorySorting(false)
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
	handleNameChange=(e, loc)=>{
		this.props.editLocationName(e.target.value)
		this.props.catchOldLocVal(loc)
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

			this.orderedCats=(this.props.currentCats.map((cat,i)=>
											this.props.locations.map((locs,i)=>
												cat === locs.Category ?<div key={i}>{locs.Category} {locs.Name}</div>:console.log(i)
										)).sort())
			this.setState({
				orderedCats:this.orderedCats
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
								<div>
									<input placeholder="name" type="text" value={this.props.newLocationName} onChange={(e)=>this.handleNameChange(e, loc)}/>
									<input placeholder="address" type="text" value={this.props.newLocationAddress} onChange={(e)=>this.props.editLocationAddress(e.target.value)}/>
									<input placeholder="coordinates" type="text" value={this.props.newLocationCoordinates} onChange={(e)=>this.props.editLocationCoordinates(e.target.value)}/>
									<select name="locCats" onChange={(e)=>this.props.editLocationCategory(e.target.value)}>
										<option selected='selected'>{loc.Category}</option>
										 {this.props.currentCats.map((cat, i)=>
													<option value ={cat} key={i} >
														{cat}
													</option>
										)}
									</select> 
								</div>
								:

								<div  ref={ref => {this.locationsOriginal = ref }}className="locationInfo">
									<div>{loc.Name}</div>
									<div>{loc.Address}</div>
									<div>{loc.Coordinates}</div>
									<div>{loc.Category}</div>
								</div>
							
							}

	
					</div>
						)}
					{this.props.categorySorted ? this.state.orderedCats:null}
				
				<div>add location
					<input placeholder="name" type="text" value={this.props.locationName} onChange={(e)=>this.props.changeLocationName(e.target.value)}/>
					<input placeholder="address" type="text" value={this.props.locationAddress} onChange={(e)=>this.props.changeLocationAddress(e.target.value)}/>
					<input placeholder="coordinates" type="text" value={this.props.locationCoordinates} onChange={(e)=>this.props.changeLocationCoordinates(e.target.value)}/>
					<select name="locCats" onChange={(e)=>this.props.changeLocationCategory(e.target.value)}>
					<option selected='selected'>category</option>
					 {this.props.currentCats.map((cat, i)=>
								<option value ={cat} key={i} >
									{cat}
								</option>)}
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
			</div>
		    	)
			}
}
export default Locations
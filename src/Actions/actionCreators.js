export const whichTopic=(value)=>{
	return{
		type:'WHICH_TOPIC',
		value
	}
}
export const changeCategoryValue=(value)=>{
	return{
		type:'CHANGE_CATEGORY_VALUE',
		value
	}
}
export const saveCats=(categories)=>{
	return{
		type:'SAVE_CATS',
		categories
	}
}
export const removeCat=(category)=>{
	return{
		type:'REMOVE_CAT',
		category
	}
}
export const editClicked=(category)=>{
	return{
		type:'EDIT_CLICKED',
		category
	}
}
export const editChosenCat=(Boolean)=>{
	return{
		type:'EDIT_CHOSEN_CAT',
		Boolean
	}
}
export const changeEditValue=(category)=>{
	return{
		type:'CHANGE_EDIT_VALUE',
		category
	}
}
export const createNewValue=(value)=>{
	return{
		type:'CREATE_NEW_VALUE',
		value
		
	}
}
export const catchOldValue=(category)=>{
	return{
		type:'CATCH_OLD_VALUE',
		category
	}
}
export const editComplete=(Number)=>{
	return{
		type:'EDIT_COMPLETE',
		Number
	}
}
export const saveLocations=(locations)=>{
	return{
		type:'SAVE_LOCATIONS',
		locations
	}
}
export const changeLocationName=(name)=>{
	return{
		type:'CHANGE_LOCATION_NAME',
		name
	}
}
export const changeLocationAddress=(address)=>{
	return{
		type:'CHANGE_LOCATION_ADDRESS',
		address
	}
}
export const changeLocationCoordinates=(Number)=>{
	return{
		type:'CHANGE_LOCATION_COORDINATES',
		Number
	}
}
export const changeLocationCoordinates2=(Number)=>{
	return{
		type:'CHANGE_LOCATION_COORDINATES2',
		Number
	}
}
export const changeLocationCategory=(category)=>{
	return{
		type:'CHANGE_LOCATION_CATEGORY',
		category
	}
}
export const removeLoc=(location)=>{
	return{
		type:'REMOVE_LOC',
		location
	}
}
export const editLocationName=(name)=>{
	return{
		type:'EDIT_LOCATION_NAME',
		name
	}
}
export const editLocationAddress=(address)=>{
	return{
		type:'EDIT_LOCATION_ADDRESS',
		address
	}
}
export const editLocationCoordinates=(Number)=>{
	return{
		type:'EDIT_LOCATION_COORDINATES',
		Number
	}
}
export const editLocationCoordinates2=(Number)=>{
	return{
		type:'EDIT_LOCATION_COORDINATES2',
		Number
	}
}
export const editLocationCategory=(category)=>{
	return{
		type:'EDIT_LOCATION_CATEGORY',
		category
	}
}
export const catchOldLocVal=(location)=>{
	return{
		type:'CATCH_OLD_LOC_VAL',
		location
	}
}
export const addIncomplete=(Boolean)=>{
	return{
		type:'ADD_INCOMPLETE',
		Boolean
	}
}
export const categorySorting=(Boolean)=>{
	return{
		type:'CATEGORY_SORTING',
		Boolean
	}
}
export const chooseACatLoc=(Boolean)=>{
	return{
		type:'CHOOSE_A_CAT_LOC',
		Boolean
	}
}
export const viewProperties=(value)=>{
	return{
		type:'VIEW_PROPERTIES',
		value
	}
}
export const saveNewLocation=(location)=>{
	return{
		type:'SAVE_NEW_LOCATION',
		location
	}
}
export const saveLat=(latitude)=>{
	return{
		type:'SAVE_LAT',
		latitude
	}
}
export const saveLong=(longitude)=>{
	return{
		type:'SAVE_LONG',
		longitude
	}
}
export const showMap=(Boolean)=>{
	return{
		type:'SHOW_MAP',
		Boolean
	}
}
export const adding=(Boolean)=>{
	return{
		type:'ADDING',
		Boolean
	}
}
export const removing=(Boolean)=>{
	return{
		type:'REMOVING',
		Boolean
	}
}
export const choosing=(Boolean)=>{
	return{
		type:'CHOOSING',
		Boolean
	}
}
export const addingBtn=(Boolean)=>{
	return{
		type:'ADDING_BTN',
		Boolean
	}
}
export const removingBtn=(Boolean)=>{
	return{
		type:'REMOVING_BTN',
		Boolean
	}
}
export const choosingBtn=(Boolean)=>{
	return{
		type:'CHOOSING_BTN',
		Boolean
	}
}



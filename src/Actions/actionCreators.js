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


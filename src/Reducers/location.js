export const Locations =(state=[], action)=>{

	switch(action.type){
		case 'SAVE_LOCATIONS':

			return action.locations

		default:
			return state;
	}
	return state
}
export const LocationName =(state='', action)=>{

	switch(action.type){
		case 'CHANGE_LOCATION_NAME':

			return action.name

		default:
			return state;
	}
	return state
}
export const LocationAddress =(state='', action)=>{

	switch(action.type){
		case 'CHANGE_LOCATION_ADDRESS':

			return action.address

		default:
			return state;
	}
	return state
}
export const LocationCoordinates =(state='', action)=>{

	switch(action.type){
		case 'CHANGE_LOCATION_COORDINATES':

			return action.Number

		default:
			return state;
	}
	return state
}
export const LocationCoordinates2 =(state='', action)=>{

	switch(action.type){
		case 'CHANGE_LOCATION_COORDINATES2':

			return action.Number

		default:
			return state;
	}
	return state
}
export const LocationCategory =(state='', action)=>{

	switch(action.type){
		case 'CHANGE_LOCATION_CATEGORY':

			return action.category

		default:
			return state;
	}
	return state
}
export const RemovedLocation =(state='', action)=>{

	switch(action.type){
		case 'REMOVE_LOC':

			return action.location

		default:
			return state;
	}
	return state
}
export const NewLocationName =(state='', action)=>{

	switch(action.type){
		case 'EDIT_LOCATION_NAME':

			return action.name

		default:
			return state;
	}
	return state
}
export const NewLocationAddress =(state='', action)=>{

	switch(action.type){
		case 'EDIT_LOCATION_ADDRESS':

			return action.address

		default:
			return state;
	}
	return state
}
export const NewLocationCoordinates =(state='', action)=>{

	switch(action.type){
		case 'EDIT_LOCATION_COORDINATES':

			return action.Number

		default:
			return state;
	}
	return state
}
export const NewLocationCoordinates2 =(state='', action)=>{

	switch(action.type){
		case 'EDIT_LOCATION_COORDINATES2':

			return action.Number

		default:
			return state;
	}
	return state
}
export const NewLocationCategory =(state='', action)=>{

	switch(action.type){
		case 'EDIT_LOCATION_CATEGORY':

			return action.category

		default:
			return state;
	}
	return state
}
export const OldLocationValue =(state=[], action)=>{

	switch(action.type){
		case 'CATCH_OLD_LOC_VAL':

			return action.location

		default:
			return state;
	}
	return state
}
export const AlertAddIncomplete =(state=[], action)=>{

	switch(action.type){
		case 'ADD_INCOMPLETE':

			return action.Boolean

		default:
			return state;
	}
	return state
}
export const CategorySorted =(state=[], action)=>{

	switch(action.type){
		case 'CATEGORY_SORTING':

			return action.Boolean

		default:
			return state;
	}
	return state
}
export const ChoseACatLoc =(state=[], action)=>{

	switch(action.type){
		case 'CHOOSE_A_CAT_LOC':

			return action.Boolean

		default:
			return state;
	}
	return state
}
export const Properties =(state=[], action)=>{

	switch(action.type){
		case 'VIEW_PROPERTIES':

			return action.value

		default:
			return state;
	}
	return state
}
export const NewLoc =(state=[], action)=>{

	switch(action.type){
		case 'SAVE_NEW_LOCATION':

			return action.location

		default:
			return state;
	}
	return state
}
export const Latitude =(state=Number, action)=>{

	switch(action.type){
		case 'SAVE_LAT':

			return action.latitude

		default:
			return state;
	}
	return state
}
export const Longitude =(state=Number, action)=>{

	switch(action.type){
		case 'SAVE_LONG':

			return action.longitude

		default:
			return state;
	}
	return state
}
export const ShowingMap =(state='', action)=>{

	switch(action.type){
		case 'SHOW_MAP':

			return action.Boolean

		default:
			return state;
	}
	return state
}
export const ToAdd =(state='', action)=>{

	switch(action.type){
		case 'ADDING':

			return action.Boolean

		default:
			return state;
	}
	return state
}
export const ToRemove =(state='', action)=>{

	switch(action.type){
		case 'REMOVING':

			return action.Boolean

		default:
			return state;
	}
	return state
}
export const Chose =(state='', action)=>{

	switch(action.type){
		case 'CHOOSING':

			return action.Boolean

		default:
			return state;
	}
	return state
}

export const AddBtn =(state='', action)=>{

	switch(action.type){
		case 'ADDING_BTN':

			return action.Boolean

		default:
			return state;
	}
	return state
}
export const RemoveBtn =(state='', action)=>{

	switch(action.type){
		case 'REMOVING_BTN':

			return action.Boolean

		default:
			return state;
	}
	return state
}
export const ChooseBtn =(state='', action)=>{

	switch(action.type){
		case 'CHOOSING_BTN':

			return action.Boolean

		default:
			return state;
	}
	return state
}


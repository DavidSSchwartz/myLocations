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

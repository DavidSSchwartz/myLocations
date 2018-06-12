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

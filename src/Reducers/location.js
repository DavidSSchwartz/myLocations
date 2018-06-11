export const LocationValue =(state='', action)=>{

	switch(action.type){
		case 'CHANGE_LOCATION_VALUE':

			return action.value

		default:
			return state;
	}
	return state
}
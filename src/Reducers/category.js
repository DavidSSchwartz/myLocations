export const CategoryValue =(state='', action)=>{

	switch(action.type){
		case 'CHANGE_CATEGORY_VALUE':

			return action.value

		default:
			return state;
	}
	return state
}
export const CurrentCats =(state='', action)=>{

	switch(action.type){
		case 'SAVE_CATS':

			return action.categories

		default:
			return state;
	}
	return state
}
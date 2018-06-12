

export const Topic =(state='', action)=>{

	switch(action.type){
		case 'WHICH_TOPIC':

			return action.value

		default:
			return state;
	}
	return state
}
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
export const RemovedCat =(state='', action)=>{

	switch(action.type){
		case 'REMOVE_CAT':

			return action.category

		default:
			return state;
	}
	return state
}

export const EditCatValue =(state='', action)=>{

	switch(action.type){
		case 'EDIT_CLICKED':

			return action.category

		default:
			return state;
	}
	return state
}
export const EditCat =(state='', action)=>{

	switch(action.type){
		case 'EDIT_CHOSEN_CAT':

			return action.Boolean

		default:
			return state;
	}
	return state
}
export const NewEditValue =(state='', action)=>{

	switch(action.type){
		case 'CHANGE_EDIT_VALUE':

			return action.category

		default:
			return state;
	}
	return state
}
 export const NewValueCats=(state='', action)=>{

	switch(action.type){
		case 'CREATE_NEW_VALUE':

			return action.value


		default:
			return state;
	}
	return state
}
export const OldValueCats =(state='', action)=>{

	switch(action.type){
		case 'CATCH_OLD_VALUE':

			return action.category


		default:
			return state;
	}
	return state
}
export const Edited =(state='', action)=>{

	switch(action.type){
		case 'EDIT_COMPLETE':

			return action.Number


		default:
			return state;
	}
	return state
}

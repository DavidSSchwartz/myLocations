export const changeCategoryValue=(value)=>{
	return{
		type:'CHANGE_CATEGORY_VALUE',
		value
	}
}
export const changeLocationValue=(value)=>{
	return{
		type:'CHANGE_LOCATION_VALUE',
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

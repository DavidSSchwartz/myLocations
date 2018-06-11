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
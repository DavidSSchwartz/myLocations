import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	CategoryValue,
	CurrentCats,
	RemovedCat,
	EditCatValue,
	EditCat,
	NewEditValue,
	NewValue
} from './category';
import {
	LocationValue
}
from './location';

export const rootReducer = combineReducers({
	CategoryValue,
	CurrentCats,
	RemovedCat,
	EditCatValue,
	EditCat,
	NewEditValue,
	NewValue,
	LocationValue,
	routing: routerReducer
});
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	CategoryValue,
	CurrentCats,
	RemovedCat,
	EditCatValue,
	EditCat,
	NewEditValue
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
	LocationValue,
	routing: routerReducer
});
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	CategoryValue,
	CurrentCats,
	RemovedCat
} from './category';
import {
	LocationValue
}
from './location';

export const rootReducer = combineReducers({
	CategoryValue,
	CurrentCats,
	RemovedCat,
	LocationValue,
	routing: routerReducer
});
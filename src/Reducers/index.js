import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	CategoryValue,
	CurrentCats
} from './category';
import {
	LocationValue
}
from './location';

export const rootReducer = combineReducers({
	CategoryValue,
	CurrentCats,
	LocationValue,

	routing: routerReducer
});
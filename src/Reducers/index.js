import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	CategoryValue,
	CurrentCats,
	RemovedCat,
	EditCatValue,
	EditCat,
	NewEditValue,
	NewValueCats,
	OldValueCats,
	Edited
} from './category';
import {
	Locations,
	LocationName,
	LocationAddress,
	LocationCoordinates,
	LocationCategory,
	RemovedLocation,
	NewLocationName,
	NewLocationAddress,
	NewLocationCoordinates,
	NewLocationCategory
}
from './location';

export const rootReducer = combineReducers({
	CategoryValue,
	CurrentCats,
	RemovedCat,
	EditCatValue,
	EditCat,
	NewEditValue,
	NewValueCats,
	OldValueCats,
	Edited,
	Locations,
	LocationName,
	LocationAddress,
	LocationCoordinates,
	LocationCategory,
	RemovedLocation,
	NewLocationName,
	NewLocationAddress,
	NewLocationCoordinates,
	NewLocationCategory,
	routing: routerReducer
});
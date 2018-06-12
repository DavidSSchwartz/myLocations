import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	Topic,
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
	NewLocationCategory,
	OldLocationValue,
	AlertAddIncomplete
}
from './location';

export const rootReducer = combineReducers({
	Topic,
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
	OldLocationValue,
	AlertAddIncomplete,
	routing: routerReducer
});
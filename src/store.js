import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';

//import the root reducer
import {rootReducer} from './Reducers/index';
import createHashHistory from 'history/createHashHistory';


import createBrowserHistory from 'history/createBrowserHistory'

const history1 = createBrowserHistory();


//create an object for the default data
const defaultState={
	Topic:'',
	CategoryValue: '',
	CurrentCats:[],
	RemovedCat:'',
	EditCatValue:'',
	EditCat:Boolean,
	NewEditValue:'',
	NewValueCats:'',
	OldValueCats:'',
	Edited:Number,
	Locations:[],
	LocationName:'',
	LocationAddress:'',
	LocationCoordinates:Number,
	LocationCoordinates2:Number,
	LocationCategory:'',
	RemovedLocation:'',
	NewLocationName:'',
	NewLocationAddress:'',
	NewLocationCoordinates:Number,
	NewLocationCoordinates2:Number,
	NewLocationCategory:'',
	OldLocationValue:[],
	AlertAddIncomplete:Boolean,
	CategorySorted:Boolean,
	ChoseACatLoc:Boolean,
	Properties:'',
	NewLoc:Array,
	Latitude:Number,
	Longitude:Number,
	ShowingMap:''
};


export const store=createStore(rootReducer, defaultState);

export let history=syncHistoryWithStore(history1, store)
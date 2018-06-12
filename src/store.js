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
	CategoryValue: '',
	LocationValue:'',
	CurrentCats:[],
	RemovedCat:'',
	EditCatValue:'',
	EditCat:Boolean,
	NewEditValue:'',
	NewValueCats:'',
	OldValueCats:'',
	Edited:Number
};


export const store=createStore(rootReducer, defaultState);

export let history=syncHistoryWithStore(history1, store)
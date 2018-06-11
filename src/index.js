import React from 'react';
import { render } from 'react-dom';
import {   BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './store';

import App from './Components/app'

import { Main } from './Components/main';

const router= (
	 <Provider store={store}>
		 <Router history={history}>
				 <Route  path='/' component={App} />
		 </Router> 
	 </Provider>
	)

render(
 	router, document.getElementById('root')
);


//module.hot.accept();
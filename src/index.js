import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './tools/redux/rootReducer';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const localStore = createStore(allReducers);

ReactDOM.render(
	<HashRouter>
		<Provider store={localStore}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);

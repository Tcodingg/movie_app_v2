import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './tools/redux/rootReducer';

const localStore = createStore(allReducers);

ReactDOM.render(
	<Provider store={localStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);

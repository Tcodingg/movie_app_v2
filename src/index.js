import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './tools/redux/rootReducer';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const localStore = createStore(
	allReducers,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<HashRouter>
		<Provider store={localStore}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);

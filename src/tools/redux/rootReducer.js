import { combineReducers } from 'redux';
import { movieReducer } from './reducer';

export const allReducers = combineReducers({ movieReducer });

import { combineReducers } from 'redux';
import { inputReducer } from './reducer';

export const allReducers = combineReducers({ inputReducer });

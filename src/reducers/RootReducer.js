import { combineReducers } from 'redux';
import countriesReducer from './CountriesReducer';
export default combineReducers({
    event: countriesReducer
})
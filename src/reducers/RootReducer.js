import { combineReducers } from 'redux';
import mainReducer from './CountriesReducer';
export default combineReducers({
    event: mainReducer
})
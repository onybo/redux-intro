import { combineReducers } from 'redux';
import company from './companyReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  company,
  routing: routerReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import company from './companyReducer';
import numberList from './numbersReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  company,
  numberList,
  routing: routerReducer
});

export default rootReducer;

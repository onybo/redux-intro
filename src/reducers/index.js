import { combineReducers } from 'redux';
import numberList from './numbersReducer';
import company from './companyReducer';

const rootReducer = combineReducers({
  numberList,
  company
});

export default rootReducer;
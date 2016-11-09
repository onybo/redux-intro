import * as types from '../constants/actionTypes';
import * as NumbersApi from '../api/numbers';

const loadNumbersFulfilled = (numbers) => ({type: types.LOAD_NUMBERS_FULFILLED, numbers}) ;

const loadNumbersPending = () => ({type: types.LOAD_NUMBERS_PENDING}) ;

export function loadNumbers(companyId) {
  return dispatch => {
    dispatch(loadNumbersPending());
    return NumbersApi.getNumbers(companyId).then(numbers => {
      console.dir(numbers);
      dispatch(loadNumbersFulfilled(numbers));
    }).catch(error => {
      throw(error);
    });
  };
}

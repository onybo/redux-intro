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

const verifyNumberFulfilled = (number) => ({type: types.VERIFY_NUMBER_FULFILLED, number}) ;

const verifyNumberPending = (number) => ({type: types.VERIFY_NUMBER_PENDING, number}) ;

export function verifyNumber(number) {
  return dispatch => {
    dispatch(verifyNumberPending(number));
    return NumbersApi.verifyNumber(number).then(number => {
      console.log("number verified");
      console.dir(number);
      dispatch(verifyNumberFulfilled(number));
    }).catch(error => {
      throw(error);
    });
  };
}

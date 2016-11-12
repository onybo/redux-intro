import * as types from '../constants/actionTypes';

export const verifyNumber = (number) => (
  {type: types.VERIFY_NUMBER, number}
);

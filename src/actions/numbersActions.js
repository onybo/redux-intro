import { REQUEST, SUCCESS, FAILURE } from '../constants/actionTypes';

const createRequestTypes = (base) => (
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {})
);

export const VERIFY_NUMBER = createRequestTypes('VERIFY_NUMBER');

const action = (type, payload = {}) => ({type, ...payload});

export const verifyNumber = {
  request: number => action(VERIFY_NUMBER.REQUEST, {number}),
  success: (number) => action(VERIFY_NUMBER.SUCCESS, {number}),
  failure: (number, error) => action(VERIFY_NUMBER.FAILURE, {number, error}),
};


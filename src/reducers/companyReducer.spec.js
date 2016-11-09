import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './companyReducer';

describe('Reducers::Company', () => {
  const getInitialState = () => {
    return {
        isPending: false,
        id: 0,
        number: '',
        name: ''
    };
  };

  const getAppState = () => {
    return {
        isPending: false,
        id: 10,
        number: '1010',
        name: 'test'
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should handle LOAD_COMPANY_PENDING', () => {
    const action = { type: ActionTypes.LOAD_COMPANY_PENDING, company: getAppState() };
    const expected = Object.assign(getAppState(), { isPending: true });

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should handle LOAD_COMPANY_FULFILLED', () => {
    const loadedCompany = {
        id: 11,
        number: '1111',
        name: 'test-updated'
    };
    const action = { type: ActionTypes.LOAD_COMPANY_FULFILLED, company: loadedCompany };

    expect(reducer(getAppState(), action)).to.deep.equal(Object.assign({}, loadedCompany, {isPending: false}));
  });
});

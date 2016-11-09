import {LOAD_NUMBERS_PENDING, LOAD_NUMBERS_FULFILLED} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function numberReducer(state = initialState.numbersList, action) {

  switch (action.type) {
    case LOAD_NUMBERS_PENDING:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {isPending: true});

    case LOAD_NUMBERS_FULFILLED:
      return objectAssign({}, state, {numbers: action.numbers, isPending: false});

    default:
      return state;
  }
}